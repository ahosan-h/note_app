import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class ClerkGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    // Allow OPTIONS requests
    if (request.method === 'OPTIONS') {
      return true;
    }

    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('No authorization header');
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    try {
      // Decode JWT manually
      const payload = JSON.parse(
        Buffer.from(token.split('.')[1], 'base64').toString(),
      );



      request.user = {
        clerkId: payload.sub,
        email: payload.email || '',
      };

      return true;
    } catch (error) {
      console.error(error);

      throw new UnauthorizedException('Invalid token');
    }
  }
}