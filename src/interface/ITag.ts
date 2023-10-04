import mongoose from "mongoose";

export interface ITag {
  id: mongoose.Schema.Types.ObjectId;
  name: string;
  type: string;
  count: number;
}