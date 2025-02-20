import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import cors from 'cors';
 
config();
 
async function bootstrap() {
  console.log('env', process.env.MONGO_URI);
 
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  const configService = app.get(ConfigService);
  const port = configService.get('PORT') || 3000;
 
  await app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}
 
bootstrap();
 