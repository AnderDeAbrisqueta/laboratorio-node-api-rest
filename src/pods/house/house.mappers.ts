import { ObjectId } from "mongodb";
import * as model from "dals/index";
import * as apiModel from "./house.api-model";

export const mapHouseFromModelToApi = (house: model.House): apiModel.House => ({
  id: house._id.toHexString(),
  title: house.title,
  image: house.image,
  description: house.description,
  room_number: house.room_number,
  bed_number: house.bed_number,
  bath_number: house.bath_number,
});

export const mapHouseListFromModelToApi = (
  houseList: model.House[]
): apiModel.House[] => houseList.map((house) => mapHouseFromModelToApi(house));

export const mapHouseFromApiToModel = (house: apiModel.House): model.House => ({
  _id: new ObjectId(house.id),
  title: house.title,
  image: house.image,
  description: house.description,
  room_number: house.room_number,
  bed_number: house.bed_number,
  bath_number: house.bath_number,
});
