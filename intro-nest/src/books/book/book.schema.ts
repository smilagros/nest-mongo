import * as mongoose from 'mongoose';
export const BookSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  descripcion: String,
});
