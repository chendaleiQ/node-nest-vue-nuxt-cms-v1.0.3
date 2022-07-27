import { Module } from '@nestjs/common';
import { FindHomeService } from './find-home.service';
import { FindHomeController } from './find-home.controller';

@Module({
  controllers: [FindHomeController],
  providers: [FindHomeService]
})
export class FindHomeModule {}
