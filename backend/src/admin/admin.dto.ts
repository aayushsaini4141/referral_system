import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
export class AdminLoginInput {
  @Field()
  email: string;

  @Field()
  password: string;
}

@ObjectType()
export class PasswordUpdateResponse {
  @Field()
  message: string;
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
