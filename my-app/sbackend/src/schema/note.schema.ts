import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { userSchema } from './user.schema';

@Schema({ timestamps: true })
export class noteSchema extends Document {
  @Prop({ required: true })
  title!: string;
  @Prop({ required: true })
  content!: string;
  @Prop({ type: Types.ObjectId, ref: 'userSchema', required: true })
  owner!: Types.ObjectId;
}
export const noteModel = SchemaFactory.createForClass(noteSchema);
