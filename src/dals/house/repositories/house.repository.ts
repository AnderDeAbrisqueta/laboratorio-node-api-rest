import { House } from "../house.model";

export interface HouseRepository {
  getHouseList: (page?: number, pageSize?: number) => Promise<House[]>;
  getHouse: (id: string) => Promise<House>;
  saveHouse: (book: House) => Promise<House>;
  deleteHouse: (id: string) => Promise<boolean>;
}
