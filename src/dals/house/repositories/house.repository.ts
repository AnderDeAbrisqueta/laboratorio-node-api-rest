import { House, Review } from "../house.model";

export interface HouseRepository {
  getHouseList: (
    page?: number,
    pageSize?: number,
    country?: string
  ) => Promise<House[]>;
  getHouse: (id: string) => Promise<House>;
  saveHouse: (house: House) => Promise<House>;
  deleteHouse: (id: string) => Promise<boolean>;
  getReviews: (id: string) => Promise<Review[]>;
  saveReview: (id: string, review: Review) => Promise<Review[]>;
}
