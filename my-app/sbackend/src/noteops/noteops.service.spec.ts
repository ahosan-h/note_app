import { Test, TestingModule } from '@nestjs/testing';
import { NoteopsService } from './noteops.service';

describe('NoteopsService', () => {
  let service: NoteopsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoteopsService],
    }).compile();

    service = module.get<NoteopsService>(NoteopsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
