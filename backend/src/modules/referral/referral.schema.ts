import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
@Schema()
export class Referral extends Document {
  @Field(() => ID)
  _id: string;

  @Field()
  @Prop({ required: true, unique: true })
  referralCode: string;

  @Field()
  @Prop({ required: true })
  userId: string;

  @Field()
  @Prop({ default: Date.now })
  createdAt: Date;
}

export const ReferralSchema = SchemaFactory.createForClass(Referral);
