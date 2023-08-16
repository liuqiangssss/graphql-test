import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.input';
import { UpdateBookDto } from './dto/update-book.input';

let books: any = [
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
@Injectable()
export class BooksService {
  create(createBookInput: CreateBookDto) {
    console.log(createBookInput);
    const temp = {
      id: books.length + 1,
      description: `This is book${books.length + 1}`,
      ...createBookInput,
    };
    books.push(temp);
    return temp;
  }

  findAll() {
    return books;
  }

  findOne(id: number) {
    return {
      id: id,
      name: `book${id}`,
      description: `This is book${id}`,
      price: 100,
    };
  }

  update(id: number, updateBookInput: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    books = books.filter((book) => book.id !== id);
    return books;
  }
}
