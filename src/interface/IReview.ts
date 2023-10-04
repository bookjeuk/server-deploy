import mongoose from "mongoose";

export interface ILikedUser {
  id: mongoose.Schema.Types.ObjectId;
  name: string;
}

export interface IReview {
  id: mongoose.Schema.Types.ObjectId;
  bookId: mongoose.Schema.Types.ObjectId;
  userId: mongoose.Schema.Types.ObjectId;
  title: string;
  desc: string;
  createdAt: Date;
  updatedAt: Date;
  likedUsers: ILikedUser[];
  likes: number;
}