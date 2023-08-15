import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';

@Injectable()
export class BooksService {
  create(createBookInput: CreateBookInput) {
    console.log(createBookInput);
    return {
      id: 5,
      ...createBookInput,
    };
  }

  findAll() {
    return [
      {
        id: 1,
        name: 'book1',
        description: 'This is book1',
        price: 100,
      },
      {
        id: 2,
        name: 'book2',
        description: 'This is book2',
        price: 100,
      },
      {
        id: 3,
        name: 'book3',
        description: 'This is book3',
        price: 100,
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookInput: UpdateBookInput) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
