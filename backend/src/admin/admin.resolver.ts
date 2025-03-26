import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { UseGuards } from '@nestjs/common';
import { AdminGuard } from './admin.guard';
import { PasswordUpdateResponse } from './admin.dto';

@Resolver()
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Mutation(() => String)
  async adminLogin(@Args('email') email: string, @Args('password') password: string) {
    const { message, token } = await this.adminService.login(email, password);
    return `${message}. Token: ${token}`;
  }

  @Query(() => String)
  @UseGuards(AdminGuard)
  async adminMe(@Args('email') email: string) {
    return `Hello, ${email}`;
  }

  @Mutation(() => PasswordUpdateResponse)
  async changePassword(
    @Args('email') email: string,
    @Args('oldPassword') oldPassword: string,
    @Args('newPassword') newPassword: string
  ): Promise<PasswordUpdateResponse> {
    return this.adminService.updatePassword(email, oldPassword, newPassword);
  }
}
