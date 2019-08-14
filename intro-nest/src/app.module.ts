import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';
import { MongooseModule} from '@nestjs/mongoose';
import { BookSchema} from './books/book/book.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/mitienda', { useNewUrlParser: true,  useFindAndModify: false  }),
    MongooseModule.forFeature([{name: 'Book', schema: BookSchema}]),
  ],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
