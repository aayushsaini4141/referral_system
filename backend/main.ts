// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
  
//   const port = process.env.PORT || 3000;
  
  
//   await app.listen(port,()=>
//   {
//     console.log(`Server is running on port ${port}`);
//   });

//   console.log(`Application is running on: ${await app.getUrl()}`);
// }

// bootstrap();


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

async function bootstrap() {
  console.log('env', process.env.MONGO_URI);

  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT') || 3000;

  await app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

bootstrap();