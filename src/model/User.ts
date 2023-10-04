import { IUser } from "../interface/IUser";
import mongoose, { Schema } from "mongoose";

const UserSchema: Schema<IUser> = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  bios: { type: String, required: true },
  sns: { type: Map, required: true },
  createdAt: { type: Date, required: true },
  tags: { type: [], required: true }
})

const User = mongoose.model<IUser>('User', UserSchema);

export default User;