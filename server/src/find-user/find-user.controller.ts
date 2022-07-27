import { Body, Controller, Post } from '@nestjs/common';
import { FindUserService } from './find-user.service';

@Controller('user')
export class FindUserController {
  constructor(private readonly findUserService: FindUserService) {}
  @Post('find-user')
  findUser(@Body() body: any) {
    return this.findUserService.findOne(body.username);
  }
}
