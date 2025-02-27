import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Referral } from './referral.schema';
import { CreateReferralInput, ReferralResponse } from './referral.dto';
import { generateReferralCode, generateReferralLink } from '../../common/utils/generated-referral';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ReferralService {
  constructor(
    @InjectModel(Referral.name) private referralModel: Model<Referral>,
    private readonly configService: ConfigService
  ) {}

  async findAll(): Promise<ReferralResponse[]> {
    return this.referralModel.find().exec();
  }

  async findByUserId(name: string): Promise<ReferralResponse | null> {
    return this.referralModel.findOne({ name }).exec();
  }

  async createReferral(input: CreateReferralInput): Promise<ReferralResponse> {
    const referralCode = generateReferralCode();
    const referralLink = generateReferralLink(input.name);

    const newReferral = new this.referralModel({
      name: input.name,
      phoneNumber: input.phoneNumber,
      email: input.email,
      businessName: input.businessName || null,
      referralCode,
      referralLink,
      stores: [],
    });

    await newReferral.save();
    return { name: input.name, referralLink };
  }

  async trackReferral(referralCode: string, storeId: string, storeName: string, secretKey: string): Promise<{ message: string }> {
    const storedSecretKey = this.configService.get<string>('SECRET_KEY');

    if (secretKey !== storedSecretKey) {
      throw new UnauthorizedException('Unauthorized: Invalid secret key');
    }

    const referral = await this.referralModel.findOne({ referralCode });
    if (!referral) {
      throw new NotFoundException('Referral code not found');
    }

    if (!referral.stores) {
      referral.stores = [];
    }

    const storeExists = referral.stores.some((store: { storeId: string }) => store.storeId === storeId);

    if (!storeExists) {
      referral.stores.push({ storeId, storeName });
      await referral.save();
    }

    return { message: 'Referral tracked successfully' };
  }
}
