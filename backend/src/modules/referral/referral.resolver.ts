import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { ReferralService } from './referral.service';
import { ReferralResponse, CreateReferralInput, ReferralTrackResponse } from './referral.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
@Resolver()
export class ReferralResolver {
  constructor(private readonly referralService: ReferralService) {}

  @Query(() => [ReferralResponse], { name: 'referrals', nullable: true })
  async getReferrals(): Promise<ReferralResponse[]> {
    return this.referralService.findAll();
  }

  @Query(() => ReferralResponse, { name: 'referralByName', nullable: true })
  async getReferralByName(@Args('name') name: string): Promise<ReferralResponse | null> {
    return this.referralService.findByUserId(name);
  }
  
  @Mutation(() => ReferralResponse)
  async createReferral(@Args('input') input: CreateReferralInput): Promise<ReferralResponse> {
    return await this.referralService.createReferral(input);
  }


  @Mutation(() => ReferralTrackResponse)
  @UseGuards(JwtAuthGuard)
  async trackReferral(
    @Args('referralCode') referralCode: string,
    @Args('storeId') storeId: string,
    @Args('storeName') storeName: string,
    
  ): Promise<ReferralTrackResponse> {
    return this.referralService.trackReferral(referralCode, storeId, storeName);
  }
}
