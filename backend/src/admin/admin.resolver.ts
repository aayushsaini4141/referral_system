import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Resolver()
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Mutation(() => String)
  async adminLogin(@Args('email') email: string, @Args('password') password: string) {
    const loginData = await this.adminService.login(email, password);
    return loginData.message;
  }

  @Query(() => String)
  @UseGuards(JwtAuthGuard)
  async adminMe(@Args('email') email: string) {
    return email;
  }
}
