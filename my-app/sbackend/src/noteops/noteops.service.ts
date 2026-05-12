import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { noteSchema, noteModel } from '../schema/note.schema';
import { createnote } from '../dto/createnote';
import { updatenote } from '../dto/updatenote';
@Injectable()
export class NoteopsService {
  constructor(
    @InjectModel(noteSchema.name) private noteModel: Model<noteSchema>,
  ) {}
  async uploadnote(postdto: createnote) {
    const newnote = new this.noteModel(postdto);
    return await newnote.save();
  }
  async getallnote(owner: string) {
    const findnotes = await this.noteModel.find({ owner: owner }).exec();
    if (!findnotes) {
      throw new NotFoundException('no  notes found');
    }
    return findnotes;
  }
  async editnote(id: String, updto: updatenote) {
    const updtnote = await this.noteModel.findByIdAndUpdate(id, updto, {
      new: true,
    });
    return updtnote;
  }
  async deletenote(id: string) {
    return this.noteModel.findByIdAndDelete(id);
  }
}
