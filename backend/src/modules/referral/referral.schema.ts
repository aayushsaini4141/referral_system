 
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Field, ObjectType, ID } from '@nestjs/graphql';
 
@ObjectType()
@Schema()
export class Referral extends Document {
  @Field(() => ID)
  _id: string;
 
  @Field()
  @Prop({ required: true })
  name: string; // Visible in GraphQL
 
  @Field()
  @Prop({ required: true, unique: true })
  referralCode: string; // Visible in GraphQL
 
  @Prop({ required: true })
  phoneNumber: string; // Not exposed in GraphQL
 
  @Prop({ required: true })
  email: string; // Not exposed in GraphQL
 
  @Prop()
  businessName?: string; // Optional field, not exposed in GraphQL
 
  @Prop({ required: true, unique: true })
  referralLink: string; // Not exposed in GraphQL
 
  @Field()
  @Prop({ default: Date.now })
  createdAt: Date;
}
 
export const ReferralSchema = SchemaFactory.createForClass(Referral);
 
 