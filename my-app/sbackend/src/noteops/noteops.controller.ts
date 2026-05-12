import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { NoteopsService } from './noteops.service';
import { createnote } from '../dto/createnote';
import { updatenote } from '../dto/updatenote';
import { ClerkGuard } from 'src/clerk/clerk.guard';
import { UseGuards } from '@nestjs/common';
@UseGuards(ClerkGuard)
@Controller('noteops')
export class NoteopsController {
  constructor(private readonly noteopsService: NoteopsService) {}

  @Post('createnote')
  uploadnote(@Body() dto: createnote) {
    return this.noteopsService.uploadnote(dto);
  }
  @Get('getallnotes/:owner')
  getalluser(@Param('owner') owner: string) {
    return this.noteopsService.getallnote(owner);
  }
  @Put('edit/:id')
  editnote(@Param('id') id: string, @Body() dto: updatenote) {
    return this.noteopsService.editnote(id, dto);
  }
  @Delete('delete/:id')
  deletenote(@Param('id') id: string) {
    return this.noteopsService.deletenote(id);
  }
}
