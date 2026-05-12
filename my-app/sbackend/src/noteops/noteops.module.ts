import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { noteSchema, noteModel } from '../schema/note.schema';
import { NoteopsController } from './noteops.controller';
import { NoteopsService } from './noteops.service';
@Module({
  imports: [
    // 'noteModel' here is the SchemaFactory you exported
    MongooseModule.forFeature([{ name: noteSchema.name, schema: noteModel }]),
  ],
  controllers: [NoteopsController],
  providers: [NoteopsService],
  exports: [NoteopsService],
})
export class NoteopsModule {}
