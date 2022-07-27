import { Injectable } from '@nestjs/common';
import { CreateFindHomeDto } from './dto/create-find-home.dto';
import { UpdateFindHomeDto } from './dto/update-find-home.dto';

@Injectable()
export class FindHomeService {
  create(createFindHomeDto: CreateFindHomeDto) {
    return 'This action adds a new findHome';
  }

  findAll() {
    return `This action returns all findHome`;
  }

  findOne(id: number) {
    return `This action returns a #${id} findHome`;
  }

  update(id: number, updateFindHomeDto: UpdateFindHomeDto) {
    return `This action updates a #${id} findHome`;
  }

  remove(id: number) {
    return `This action removes a #${id} findHome`;
  }
}
