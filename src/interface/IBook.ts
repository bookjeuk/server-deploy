import { ITag } from './ITag';
import mongoose from "mongoose";


export interface IBook {
  id: mongoose.Schema.Types.ObjectId;
  book_id: string;
  title: string;
  desc: string;
  thumbnail: string;
  reviewCount: number;
  tags: ITag[]
}