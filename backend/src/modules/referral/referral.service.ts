import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Referral } from './referral.schema';
import { CreateReferralInput, ReferralResponse } from './referral.dto';
import { generateReferralCode, generateReferralLink } from '../../common/utils/generated-referral';
 
@Injectable()
export class ReferralService {
  constructor(
    @InjectModel(Referral.name)
    private referralModel: Model<Referral>
  ) {}
 
  async createReferral(input: CreateReferralInput): Promise<ReferralResponse> {
    const referralCode = generateReferralCode();
    const referralLink = generateReferralLink(input.name);
 
    const newReferral = new this.referralModel({
      name: input.name,
      phoneNumber: input.phoneNumber,
      email: input.email,
      businessName: input.businessName || null,
      referralCode,
      referralLink, // Store generated referral link
    });
 
    await newReferral.save();
    return { name: input.name, referralLink };
  }
 
 
  async findAll(): Promise<ReferralResponse[]> {
    const referrals = await this.referralModel.find().exec();
    return referrals.map(({ name, referralLink }) => ({ name, referralLink }));
  }
 
  async findByUserId(name: string): Promise<ReferralResponse | null> {
    const referral = await this.referralModel.findOne({ name }).exec();
    if (!referral) return null;
    return { name: referral.name, referralLink: referral.referralLink };
  }
}
 
 