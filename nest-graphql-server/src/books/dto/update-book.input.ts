import { CreateBookDto } from './create-book.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  id: number;
}
