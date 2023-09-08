import { ObjectId } from "mongodb";

export interface House {
  _id: ObjectId;
  title: string;
  image: string;
  description: string;
  room_number: Number;
  bed_number: Number;
  bath_number: Number;
}
