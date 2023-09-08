import { ObjectId } from "mongodb";
import { HouseRepository } from "./house.repository";
import { House } from "../house.model";
import { getHouseContext } from "../house.context";

export const dbRepository: HouseRepository = {
  getHouseList: async (page?: number, pageSize?: number) => {
    const skip = Boolean(page) ? (page - 1) * pageSize : 0;
    const limit = Boolean(pageSize) ? pageSize : 0;
    return await getHouseContext().find().skip(skip).limit(limit).toArray();
  },
  getHouse: async (id: string) => {
    return await getHouseContext().findOne({
      _id: new ObjectId(id),
    });
  },
  saveHouse: async (house: House) => {
    return await getHouseContext().findOneAndUpdate(
      {
        _id: house._id,
      },
      { $set: house },
      { upsert: true, returnDocument: "after" }
    );
  },
  deleteHouse: async (id: string) => {
    const { deletedCount } = await getHouseContext().deleteOne({
      _id: new ObjectId(id),
    });
    return deletedCount === 1;
  },
};
