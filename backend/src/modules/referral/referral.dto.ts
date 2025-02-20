import { Field, InputType, ObjectType } from '@nestjs/graphql';
 
@InputType()
export class CreateReferralInput {
  @Field()
  name: string;
 
  @Field()
  phoneNumber: string;
 
  @Field()
  email: string;
 
  @Field({ nullable: true })
  businessName?: string;
}
 
@ObjectType()
export class ReferralResponse {
  @Field()
  name: string;
 
  @Field()
  referralLink: string;
}
 
 