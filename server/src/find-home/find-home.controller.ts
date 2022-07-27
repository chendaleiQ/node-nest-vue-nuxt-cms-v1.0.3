import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FindHomeService } from './find-home.service';
import { CreateFindHomeDto } from './dto/create-find-home.dto';
import { UpdateFindHomeDto } from './dto/update-find-home.dto';

@Controller('find-home')
export class FindHomeController {
  constructor(private readonly findHomeService: FindHomeService) {}

  @Post()
  create(@Body() createFindHomeDto: CreateFindHomeDto) {
    return this.findHomeService.create(createFindHomeDto);
  }

  @Get()
  findAll() {
    return this.findHomeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findHomeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFindHomeDto: UpdateFindHomeDto,
  ) {
    return this.findHomeService.update(+id, updateFindHomeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.findHomeService.remove(+id);
  }
}
