import { ObjectId } from "mongodb";
import { HouseRepository } from "./house.repository";
import { House } from "../house.model";
import { db } from "../../mock-data";
import { houseContext } from "../house.context";

const insertHouse = (house: House) => {
  const _id = new ObjectId();
  const newHouse: House = {
    ...house,
    _id,
  };

  db.houses = [...db.houses, newHouse];
  return newHouse;
};

const updateHouse = (house: House) => {
  db.houses = db.houses.map((b) =>
    b._id.toHexString() === house._id.toHexString() ? { ...b, ...house } : b
  );
  return house;
};

const paginateHouseList = (
  houseList: House[],
  page: number,
  pageSize: number,
  country: string
): House[] => {
  let filteredHouseList = [...houseList];

  if (country){
    filteredHouseList = filteredHouseList.filter(house => 
      house.address.some(address => address.country === country))
  }

  let paginatedHouseList = [...filteredHouseList];

  if (page && pageSize) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, filteredHouseList.length);
    paginatedHouseList = filteredHouseList.slice(startIndex, endIndex);
  }
  return paginatedHouseList;
};

export const mockRepository: HouseRepository = {
  getHouseList: async (page?: number, pageSize?: number, country?: string) =>
    paginateHouseList(db.houses, page, pageSize, country),
  getHouse: async (id: string) =>
    db.houses.find((b) => b._id.toHexString() === id),
  saveHouse: async (house: House) => {
    return Boolean(house._id) ? updateHouse(house) : insertHouse(house);
  },
  deleteHouse: async (id: string) => {
    db.houses = db.houses.filter((b) => b._id.toHexString() !== id);
    return true;
  },
  getReviews: async (id: string) => {
    return await houseContext
      .find(
        {
          _id: id,
        },
        { _id: 0, reviews: 1 }
      )
      .lean();
  },
};
