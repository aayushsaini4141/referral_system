import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ReferralResponse {
  @Field()
  name: string;

  @Field()
  referralCode: string;
}

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
export class ReferralTrackResponse {
  @Field()
  message: string;
}
