import { ObjectId } from "mongodb";
import { HouseRepository } from "./house.repository";
import { House, Review } from "../house.model";
import { houseContext } from "../house.context";
import { mapReviewsFromModelToApi } from "pods/house/house.mappers";

export const dbRepository: HouseRepository = {
  getHouseList: async (page?: number, pageSize?: number, country?: string) => {
    const skip = Boolean(page) ? (page - 1) * pageSize : 0;
    const limit = Boolean(pageSize) ? pageSize : 0;
    const countryName = country != "undefined" ? country : "";
    const result =
      countryName != ""
        ? await houseContext
            .find({ "address.country": country })
            .skip(skip)
            .limit(limit)
            .lean()
        : await houseContext.find().skip(skip).limit(limit).lean();

    return result;
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
  getReviews: async (id: string) => {
    const { reviews } = await houseContext
      .findOne({
        _id: new ObjectId(id),
      })
      .select({ _id: 0, reviews: 1 })
      .lean();

    return reviews;
  },
  saveReview: async (id: string, review: Review) => {
    try {
    
      const house = await houseContext.findById(id);

      if (!house) {
        throw new Error(`La casa con ID ${id} no fue encontrada.`);
      }

      const newReview: Review = {
        _id: new ObjectId().toHexString(),
        date: new Date(),
        comments: review.comments
      };

      house.reviews.push(newReview);

      await house.save();

      return mapReviewsFromModelToApi(house.reviews);

    } catch (error) {
      throw new Error(`Error al guardar la revisión: ${error.message}`);
    }
  }
};
