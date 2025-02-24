// import { Resolver, Query, Args } from '@nestjs/graphql';
// import { ReferralService } from '../referral/referral.service';
// import { ReferralResponse } from '../referral/referral.dto';
 
// @Resolver()
// export class UserResolver {
//   constructor(private readonly referralService: ReferralService) {}
 
//   @Query(() => ReferralResponse, { name: 'userReferral', nullable: true })
//   async getUserReferral(@Args('name') name: string): Promise<ReferralResponse | null> {
//     return this.referralService.findByUserId(name);
//   }
// }
 
 