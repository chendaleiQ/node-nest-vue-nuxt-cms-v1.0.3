import { Test, TestingModule } from '@nestjs/testing';
import { FindHomeService } from './find-home.service';

describe('FindHomeService', () => {
  let service: FindHomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindHomeService],
    }).compile();

    service = module.get<FindHomeService>(FindHomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
