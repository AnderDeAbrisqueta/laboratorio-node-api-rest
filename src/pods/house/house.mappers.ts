import * as model from "dals";
import * as apiModel from "./house.api-model";

export const mapHouseFromModelToApi = (house: model.House): apiModel.House => ({
  id: house.id,
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
  id: house.id,
  title: house.title,
  image: house.image,
  description: house.description,
  room_number: house.room_number,
  bed_number: house.bed_number,
  bath_number: house.bath_number,
});
