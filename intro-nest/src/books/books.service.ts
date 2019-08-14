import { Injectable } from '@nestjs/common';
import { BookI} from './interfaces/book.interface';
import { CreateBookDto } from './dto/create-book';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';

@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<BookI>) {}

  async findAll(): Promise<BookI[]> {
    /*return 'Find all books ->service';*/
    return await this.bookModel.find();
  }

  async findBookById(id: string): Promise<BookI> {
    /*return 'One Book ->service';*/
    return await this.bookModel.findOne({_id: id});

  }

  async createBook(book: BookI): Promise<BookI> {
    const newBook = new this.bookModel(book);
    /*return 'Create book ->service';*/
    return await newBook.save();

  }

  async updateBook(idBook: string, book: BookI): Promise<BookI> {
    /*return 'Update book ->service';*/
    return await this.bookModel.findByIdAndUpdate(idBook, book, {new: true});

  }

  async deleteBook(idBook: string): Promise<BookI> {
    /*return 'Delete book ->service';*/
    return await  this.bookModel.findByIdAndRemove(idBook);
  }
}
