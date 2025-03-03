import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReferralService } from './referral.service';
import { ReferralResolver } from './referral.resolver';
import { Referral, ReferralSchema } from './referral.schema';
import { JwtStrategy } from '../../auth/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Referral.name, schema: ReferralSchema }]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [ReferralService, ReferralResolver,JwtStrategy],
  exports: [ReferralService],
})
export class ReferralModule {}
