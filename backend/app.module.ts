import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ReferralModule } from './src/modules/referral/referral.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import{ AuthModule } from './src/auth/auth.module';
import { AdminModule } from './src/admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // or path to your schema file
      playground: true,
    }),
    ReferralModule,
      AuthModule,
      AdminModule
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
