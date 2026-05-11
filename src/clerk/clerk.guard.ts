import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { clerkClient } from '@clerk/clerk-sdk-node';
@Injectable()
export class ClerkGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (request.method === 'OPTIONS') {
      return true;
    }
    const token = request.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException(' you are not authorized');
    }
    try {
      const sessioncalim = await clerkClient.verifyToken(token);
      console.log('Clerk JWT Claim:', sessioncalim);
      request.user = {
        clerkId: sessioncalim.sub,
        email:
          (sessioncalim as any).email_address ||
          (sessioncalim as any).email ||
          '',
      };

      return true;
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}
