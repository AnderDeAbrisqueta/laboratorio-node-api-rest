import { ObjectId } from "mongodb";
import { HouseRepository } from "./house.repository";
import { House } from "../house.model";
import { houseContext } from "../house.context";

export const dbRepository: HouseRepository = {
  getHouseList: async (page?: number, pageSize?: number) => {
    const skip = Boolean(page) ? (page - 1) * pageSize : 0;
    const limit = Boolean(pageSize) ? pageSize : 0;
    return await houseContext.find().skip(skip).limit(limit).lean();
  },
  getHouse: async (id: string) => {
    return await houseContext
      .findOne({
        _id: new ObjectId(id),
      })
      .lean();
  },
  saveHouse: async (house: House) => {
    return await houseContext
      .findOneAndUpdate(
        {
          _id: house._id,
        },
        { $set: house },
        { upsert: true, returnDocument: "after" }
      )
      .lean();
  },
  deleteHouse: async (id: string) => {
    const { deletedCount } = await houseContext
      .deleteOne({
        _id: new ObjectId(id),
      })
      .lean();
    return deletedCount === 1;
  },
};
