import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReferralService } from './referral.service';
import { ReferralResolver } from './referral.resolver';
import { Referral, ReferralSchema } from './referral.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Referral.name, schema: ReferralSchema }])
  ],
  providers: [ReferralService, ReferralResolver],
  exports: [ReferralService],
})
export class ReferralModule {}
