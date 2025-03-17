import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AdminLoginInput {
  @Field()
  email: string;

  @Field()
  password: string;
}

@InputType()
export class UpdateAdminInput {
  @Field()
  email: string;

  @Field()
  oldPassword: string;

  @Field()
  newPassword: string;
}
