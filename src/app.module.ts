import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
// Don't forget AuthModule if you want your AuthGuard to work!
// import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        // 1. Get the URI and explicitly type it
        const uri = configService.get<string>('MONGO_URI');

        // 2. Safely check if it exists before passing it to Mongoose
        if (!uri) {
          throw new Error(
            'CRITICAL: MONGO_URI is not defined in your .env file!',
          );
        }

        // 3. Return the clean, guaranteed string
        return { uri };
      },
      inject: [ConfigService],
    }),

    UserModule,
    // AuthModule, // <-- Uncomment this when you are ready to test authentication
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
