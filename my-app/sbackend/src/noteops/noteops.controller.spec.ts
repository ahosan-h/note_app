import { Test, TestingModule } from '@nestjs/testing';
import { NoteopsController } from './noteops.controller';

describe('NoteopsController', () => {
  let controller: NoteopsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NoteopsController],
    }).compile();

    controller = module.get<NoteopsController>(NoteopsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
