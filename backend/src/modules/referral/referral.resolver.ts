

 
import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { ReferralService } from './referral.service';
import { ReferralResponse, CreateReferralInput } from './referral.dto';
 
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
  async createReferral(
    @Args('input') input: CreateReferralInput
  ): Promise<ReferralResponse> {
    return await this.referralService.createReferral(input);
  }
}
 
 