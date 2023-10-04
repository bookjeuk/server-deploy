import { ITag } from "../interface/ITag";
import mongoose, { Schema } from "mongoose";

const TagSchema: Schema<ITag> = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  count: { type: Number, required: true }
})

const Tag = mongoose.model<ITag>('Tag', TagSchema);

export default Tag;