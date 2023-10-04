import mongoose from "mongoose";
import { ITag } from "./ITag";

export interface ISNS {
  [sns: string] :string
}

export interface IUser {
  id: mongoose.Schema.Types.ObjectId;
  email: string;
  password: string;
  name: string;
  bios: string;
  sns: ISNS;
  createdAt: Date;
  tags: ITag[];
}