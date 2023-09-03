import { HouseRepository } from "./house.repository";
import { House } from "../house.model";
import { db } from "../../mock-data";

const insertHouse = (house: House) => {
  const id = (db.houses.length + 1).toString();
  const newHouse: House = {
    ...house,
    id,
  };

  db.houses = [...db.houses, newHouse];
  return newHouse;
};

const updateHouse = (house: House) => {
  db.houses = db.houses.map((b) =>
    b.id === house.id ? { ...b, ...house } : b
  );
  return house;
};

const paginateBookList = (
  houseList: House[],
  page: number,
  pageSize: number
): House[] => {
  let paginatedHouseList = [...houseList];
  if (page && pageSize) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, houseList.length);
    paginatedHouseList = houseList.slice(startIndex, endIndex);
  }
  return paginatedHouseList;
};

export const mockRepository: HouseRepository = {
  getHouseList: async (page?: number, pageSize?: number) =>
    paginateBookList(db.houses, page, pageSize),
  getHouse: async (id: string) => db.houses.find((b) => b.id === id),
  saveHouse: async (house: House) => {
    return Boolean(house.id) ? updateHouse(house) : insertHouse(house);
  },
  deleteHouse: async (id: string) => {
    db.houses = db.houses.filter((b) => b.id !== id);
    return true;
  },
};
