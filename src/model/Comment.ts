import { ILikedUser } from './../interface/IReview';
import { IComment } from './../interface/IComment';
import mongoose, { Schema } from 'mongoose';

const CommentSchema: Schema<IComment> = new Schema({
  reviewId: { type: mongoose.Types.ObjectId, required: true },
  userId: { type: mongoose.Types.ObjectId, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
  likedUsers: { type: [], required: true },
  likes: { type: Number, required: true }
})

const Comment = mongoose.model<IComment>('Comment', CommentSchema);

export default Comment;