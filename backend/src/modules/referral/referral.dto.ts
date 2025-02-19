import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreateReferralInput {
  @Field()
  userId: string;
}
@ObjectType()
export class ReferralResponse {
  @Field()
  referralCode: string;
}
