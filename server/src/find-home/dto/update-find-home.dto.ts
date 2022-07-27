import { PartialType } from '@nestjs/swagger';
import { CreateFindHomeDto } from './create-find-home.dto';

export class UpdateFindHomeDto extends PartialType(CreateFindHomeDto) {}
