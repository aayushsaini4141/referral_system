import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Referral } from './referral.schema';
import { CreateReferralInput } from './referral.dto';
import { generateReferralCode } from '../../common/utils/generated-referral';

@Injectable()
export class ReferralService {
  constructor(
    @InjectModel(Referral.name) 
    private referralModel: Model<Referral>
  ) {}

  async createReferral(input: CreateReferralInput): Promise<string> {
    const referralCode = generateReferralCode()
    const newReferral = new this.referralModel({ 
      userId: input.userId, 
      referralCode 
    });
    await newReferral.save();        
    return referralCode;
  }

  async findAll(): Promise<Referral[]> {
    return this.referralModel.find().exec();
  }
}
