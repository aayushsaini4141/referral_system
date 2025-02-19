import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { ReferralService } from './referral.service';
import { ReferralResponse, CreateReferralInput } from './referral.dto';
import { Referral } from './referral.schema';

@Resolver()
export class ReferralResolver {
  constructor(private readonly referralService: ReferralService) {}

  @Query(() => [Referral], { name: 'referrals', nullable: true })
  async getReferrals(): Promise<Referral[]> {
    return this.referralService.findAll();
  }

  @Mutation(() => ReferralResponse)
  async createReferral(
    @Args('input') input: CreateReferralInput
  ): Promise<ReferralResponse> {
    const referralCode = await this.referralService.createReferral(input);
    return { referralCode };
  }
}
