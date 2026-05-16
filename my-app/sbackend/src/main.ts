import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Robust CORS configuration with Preflight handling
  app.enableCors({
    origin: (origin, callback) => {
      const allowedOrigins = [
    'http://localhost:3000',
    'http://192.168.0.100:3000',
    'https://573d34ff-3000.inc1.devtunnels.ms',
];
      // Allow requests with no origin or those in our list
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    // CRITICAL FIX: Ensure OPTIONS requests return a success status (204)
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  app.useGlobalPipes(new ValidationPipe());

  const PORT = process.env.PORT ?? 2017;
  await app.listen(PORT);
  console.log(`Backend is running on: http://localhost:${PORT}`);
}
bootstrap();
