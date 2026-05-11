import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema({ timestamps: true })
export class userSchema extends Document {
  @Prop({ required: true })
  clerkId!: string;
  @Prop({ required: true })
  email!: string;
}
export const UserModel = SchemaFactory.createForClass(userSchema);
