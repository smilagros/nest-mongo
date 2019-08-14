import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateBookDto} from './dto/create-book';
import { BooksService } from './books.service';
import { BookI} from './interfaces/book.interface';

@Controller('books')
export class BooksController {
  /*inyectamos*/
  constructor(private readonly bookService: BooksService) {}
  @Get()
   getAllBooks(): Promise<BookI[]> {
    return this.bookService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string): Promise<BookI> {
    /*return `This action returns a #${id} `;*/
    return this.bookService.findBookById(id);
  }

  @Post()
  createBook(@Body() bookDto: CreateBookDto): Promise<BookI> {
    /*return `Create new book ${bookDto}`;*/
   /* return `Create new book ${bookDto.titulo}`;*/
    return this.bookService.createBook(bookDto);

  }
  @Put(':id')
  updateBook(@Param('id') idBook: string, @Body() bookDto: CreateBookDto): Promise<BookI> {
    /*return `This action updates #${idBook}`;*/
    return this.bookService.updateBook(idBook, bookDto);

  }

  @Delete(':id')
  deleteBook(@Param('id') idBook: string): Promise<BookI> {
    /*return `Delete book #${idBook}`;*/
    return this.bookService.deleteBook(idBook);
  }
}
