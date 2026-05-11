import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userSchema } from 'schema/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(userSchema.name) private UserModel: Model<userSchema>,
  ) {}

  async syncuser(clerkId: string, email: string) {
    return this.UserModel.findOneAndUpdate(
      { clerkId: clerkId },
      {
        $set: { clerkId: clerkId, email: email },
      },

      { upsert: true, new: true },
    );
  }
}
