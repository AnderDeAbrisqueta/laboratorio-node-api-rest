import { ObjectId } from "mongodb";
import * as model from "dals/index";
import * as apiModel from "./house.api-model";

export const mapHouseFromModelToApi = (house: model.House): apiModel.House => ({
  id: house._id.toHexString(),
  listing_url: house.listing_url,
  name: house.name,
  summary: Boolean(house.summary) ? house.summary : undefined,
  space: Boolean(house.space) ? house.space : undefined,
  description: Boolean(house.description) ? house.description : undefined,
  neighborhood_overview: Boolean(house.neighborhood_overview)
    ? house.neighborhood_overview
    : undefined,
  notes: Boolean(house.notes) ? house.notes : undefined,
  transit: Boolean(house.transit) ? house.transit : undefined,
  access: Boolean(house.access) ? house.access : undefined,
  interaction: Boolean(house.interaction) ? house.interaction : undefined,
  house_rules: Boolean(house.house_rules) ? house.house_rules : undefined,
  property_type: Boolean(house.property_type) ? house.property_type : undefined,
  room_type: Boolean(house.room_type) ? house.room_type : undefined,
  bed_type: Boolean(house.bed_type) ? house.bed_type : undefined,
  minimum_nights: Boolean(house.minimum_nights)
    ? house.minimum_nights
    : undefined,
  maximum_nights: Boolean(house.maximum_nights)
    ? house.maximum_nights
    : undefined,
  cancellation_policy: Boolean(house.cancellation_policy)
    ? house.cancellation_policy
    : undefined,
  last_scraped: Boolean(house.last_scraped) ? house.last_scraped : undefined,
  calendar_last_scraped: Boolean(house.calendar_last_scraped)
    ? house.calendar_last_scraped
    : undefined,
  first_review: Boolean(house.first_review) ? house.first_review : undefined,
  last_review: Boolean(house.last_review) ? house.last_review : undefined,
  accommodates: Boolean(house.accommodates) ? house.accommodates : undefined,
  bedrooms: house.bedrooms,
  beds: house.beds,
  number_of_reviews: Boolean(house.number_of_reviews)
    ? house.number_of_reviews
    : undefined,
  bathrooms: house.bathrooms,
  amenities: Boolean(house.amenities) ? house.amenities : undefined,
  price: Boolean(house.price) ? house.price : undefined,
  weekly_price: Boolean(house.weekly_price) ? house.weekly_price : undefined,
  monthly_price: Boolean(house.monthly_price) ? house.monthly_price : undefined,
  security_deposit: Boolean(house.security_deposit)
    ? house.security_deposit
    : undefined,
  cleaning_fee: Boolean(house.cleaning_fee) ? house.cleaning_fee : undefined,
  extra_people: Boolean(house.extra_people) ? house.extra_people : undefined,
  guests_included: Boolean(house.guests_included)
    ? house.guests_included
    : undefined,
  images: Boolean(house.images) ? house.images : undefined,
  host: Boolean(house.host) ? house.host : undefined,
  address: Boolean(house.address) ? house.address : undefined,
  availability: Boolean(house.availability) ? house.availability : undefined,
  review_scores: Boolean(house.review_scores) ? house.review_scores : undefined,
  reviews: house.reviews,
});

export const mapHouseListFromModelToApi = (
  houseList: model.House[]
): apiModel.House[] => houseList.map((house) => mapHouseFromModelToApi(house));

export const mapHouseFromApiToModel = (house: apiModel.House): model.House => ({
  _id: new ObjectId(house.id),
  listing_url: house.listing_url,
  name: house.name,
  summary: Boolean(house.summary) ? house.summary : undefined,
  space: Boolean(house.space) ? house.space : undefined,
  description: Boolean(house.description) ? house.description : undefined,
  neighborhood_overview: Boolean(house.neighborhood_overview)
    ? house.neighborhood_overview
    : undefined,
  notes: Boolean(house.notes) ? house.notes : undefined,
  transit: Boolean(house.transit) ? house.transit : undefined,
  access: Boolean(house.access) ? house.access : undefined,
  interaction: Boolean(house.interaction) ? house.interaction : undefined,
  house_rules: Boolean(house.house_rules) ? house.house_rules : undefined,
  property_type: Boolean(house.property_type) ? house.property_type : undefined,
  room_type: Boolean(house.room_type) ? house.room_type : undefined,
  bed_type: Boolean(house.bed_type) ? house.bed_type : undefined,
  minimum_nights: Boolean(house.minimum_nights)
    ? house.minimum_nights
    : undefined,
  maximum_nights: Boolean(house.maximum_nights)
    ? house.maximum_nights
    : undefined,
  cancellation_policy: Boolean(house.cancellation_policy)
    ? house.cancellation_policy
    : undefined,
  last_scraped: new Date(house.last_scraped),
  calendar_last_scraped: new Date(house.calendar_last_scraped),
  first_review: new Date(house.first_review),
  last_review: new Date(house.last_review),
  accommodates: house.accommodates,
  bedrooms: Number(house.bedrooms),
  beds: house.beds,
  number_of_reviews: Boolean(house.number_of_reviews)
    ? house.number_of_reviews
    : undefined,
  bathrooms: house.bathrooms,
  amenities: Boolean(house.amenities) ? house.amenities : undefined,
  price: Boolean(house.price) ? house.price : undefined,
  weekly_price: Boolean(house.weekly_price) ? house.weekly_price : undefined,
  monthly_price: Boolean(house.monthly_price) ? house.monthly_price : undefined,
  security_deposit: Boolean(house.security_deposit)
    ? house.security_deposit
    : undefined,
  cleaning_fee: Boolean(house.cleaning_fee) ? house.cleaning_fee : undefined,
  extra_people: Boolean(house.extra_people) ? house.extra_people : undefined,
  guests_included: Boolean(house.guests_included)
    ? house.guests_included
    : undefined,
  images: Boolean(house.images) ? house.images : undefined,
  host: Boolean(house.host) ? house.host : undefined,
  address: Boolean(house.address) ? house.address : undefined,
  availability: Boolean(house.availability) ? house.availability : undefined,
  review_scores: Boolean(house.review_scores) ? house.review_scores : undefined,
  reviews: house.reviews,
});

export const mapReviewFromModelToApi = (
  review: model.Review
): apiModel.Review => ({
  _id: review._id,
  date: review.date,
  listing_id: Boolean(review.listing_id) ? review.listing_id : undefined,
  reviewer_id: Boolean(review.reviewer_id) ? review.reviewer_id : undefined,
  reviewer_name: Boolean(review.reviewer_name)
    ? review.reviewer_name
    : undefined,
  comments: review.comments,
});

export const mapReviewsFromModelToApi = (
  reviewList: model.Review[]
): apiModel.Review[] => reviewList.map(mapReviewFromModelToApi);

export const mapReviewFromApiToModel = (
  review: apiModel.Review
): model.Review => ({
  _id: review._id,
  date: new Date(review.date),
  listing_id: Boolean(review.listing_id) ? review.listing_id : undefined,
  reviewer_id: Boolean(review.reviewer_id) ? review.reviewer_id : undefined,
  reviewer_name: Boolean(review.reviewer_name)
    ? review.reviewer_name
    : undefined,
  comments: review.comments,
});
