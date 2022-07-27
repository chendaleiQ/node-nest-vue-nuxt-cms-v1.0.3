import { Test, TestingModule } from '@nestjs/testing';
import { FindHomeController } from './find-home.controller';
import { FindHomeService } from './find-home.service';

describe('FindHomeController', () => {
  let controller: FindHomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FindHomeController],
      providers: [FindHomeService],
    }).compile();

    controller = module.get<FindHomeController>(FindHomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
