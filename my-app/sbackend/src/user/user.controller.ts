import { Controller, Post, Req, UseGuards } from '@nestjs/common'; // Import Req
import { ClerkGuard } from '../clerk/clerk.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('sync')
  @UseGuards(ClerkGuard)
  async syncuser(@Req() req: any) {
    // Change @Body() to @Req()
    // Now req refers to the Request object where the Guard attached the user
    const { clerkId, email } = req.user;
    console.log('Service received:', { clerkId, email });

    return this.userService.syncuser(clerkId, email);
  }
}
