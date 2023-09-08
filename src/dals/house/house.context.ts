import { model, Schema } from "mongoose";
import { House } from "./house.model";

const houseSchema = new Schema<House>({
  title: { type: Schema.Types.String, required: true },
  image: { type: Schema.Types.String, required: true },
  description: { type: Schema.Types.String, required: true },
  room_number: { type: Schema.Types.Number, required: true },
  bed_number: { type: Schema.Types.Number, required: true },
  bath_number: { type: Schema.Types.Number, required: true },
});

export const houseContext = model<House>("houses", houseSchema);
