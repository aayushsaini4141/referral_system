import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReferralDocument = Referral & Document;

@Schema({ timestamps: true })
export class Referral {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  businessName?: string;

  @Prop({ required: true, unique: true })
  referralCode: string;

  @Prop({ required: true })
  referralLink: string;

  @Prop({ type: [{ storeId: String, storeName: String }], default: [] })
  stores: { storeId: string; storeName: string }[];
}

export const ReferralSchema = SchemaFactory.createForClass(Referral);
