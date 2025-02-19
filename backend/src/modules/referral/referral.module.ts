import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Referral, ReferralSchema } from './referral.schema';
import { ReferralResolver } from './referral.resolver';
import { ReferralService } from './referral.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Referral.name, schema: ReferralSchema }])],
  providers: [ReferralResolver, ReferralService],
})
export class ReferralModule {
    
}
