import { IBook } from './../interface/IBook';
import mongoose, { Schema } from "mongoose";

const BookSchema: Schema<IBook> = new Schema({
  book_id: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  thumbnail: { type: String, required: true },
  reviewCount: { type: Number, required: true }
})

const Book = mongoose.model<IBook>('Book', BookSchema);

export default Book;