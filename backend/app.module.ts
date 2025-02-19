
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ReferralModule } from './src/modules/referral/referral.module';

import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/referral_system';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env']
    }),
    MongooseModule.forRoot(MONGO_URI),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(),'src/schema.gql'), // or path to your schema file
      playground: true,
    }),
    ReferralModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
