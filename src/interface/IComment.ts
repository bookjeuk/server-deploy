import mongoose from "mongoose";
import { ILikedUser } from "./IReview";

export interface IComment {
  id: mongoose.Schema.Types.ObjectId;
  reviewId: mongoose.Schema.Types.ObjectId;
  userId: mongoose.Schema.Types.ObjectId;
  title: string;
  desc: string;
  createdAt: Date;
  updatedAt: Date;
  likedUsers: ILikedUser[];
  likes: number;
}