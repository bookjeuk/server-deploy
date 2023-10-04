import { IReview } from "../interface/IReview";
import mongoose, { Schema } from "mongoose";

const ReviewSchema: Schema<IReview> = new Schema({
  bookId: { type: mongoose.Types.ObjectId, required: true },
  userId: { type: mongoose.Types.ObjectId, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
  likedUsers: { type: [], required: true },
  likes: { type: Number, required: true }
})

const Review = mongoose.model<IReview>('Review', ReviewSchema);

export default Review;