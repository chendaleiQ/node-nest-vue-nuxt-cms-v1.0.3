import { Module } from '@nestjs/common';
import { FindUserService } from './find-user.service';
import { FindUserController } from './find-user.controller';

@Module({
  controllers: [FindUserController],
  providers: [FindUserService],
  exports: [FindUserService],
})
export class FindUserModule {}
