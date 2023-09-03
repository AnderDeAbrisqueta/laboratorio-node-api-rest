import { HouseRepository } from "./house.repository";
import { House } from "../house.model";

export const dbRepository: HouseRepository = {
  getHouseList: async (page?: number, pageSize?: number) => {
    throw new Error("Not implemented");
  },
  getHouse: async (id: string) => {
    throw new Error("Not implemented");
  },
  saveHouse: async (book: House) => {
    throw new Error("Not implemented");
  },
  deleteHouse: async (id: string) => {
    throw new Error("Not implemented");
  },
};
