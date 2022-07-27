import { Injectable } from '@nestjs/common';

@Injectable()
export class FindUserService {
  findOne(username: string): string {
    if (username === 'czq') {
      return 'chenzhongqing';
    }
    return 'none';
  }
}
