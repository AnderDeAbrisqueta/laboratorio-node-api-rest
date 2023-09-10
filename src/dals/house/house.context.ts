import { model, Schema } from "mongoose";
import { House } from "./house.model";

const houseSchema = new Schema<House>({
  listing_url: { type: Schema.Types.String, required: true },
  name: { type: Schema.Types.String, required: true },
  summary: { type: Schema.Types.String, required: true },
  space: { type: Schema.Types.String },
  description: { type: Schema.Types.String },
  neighborhood_overview: { type: Schema.Types.String },
  notes: { type: Schema.Types.String },
  transit: { type: Schema.Types.String },
  access: { type: Schema.Types.String },
  interaction: { type: Schema.Types.String },
  house_rules: { type: Schema.Types.String },
  property_type: { type: Schema.Types.String },
  room_type: { type: Schema.Types.String },
  bed_type: { type: Schema.Types.String },
  minimum_nights: { type: Schema.Types.String },
  maximum_nights: { type: Schema.Types.String },
  cancellation_policy: { type: Schema.Types.String },
  last_scraped: { $date: { type: Schema.Types.Date } },
  calendar_last_scraped: { $date: { type: Schema.Types.Date } },
  first_review: { $date: { type: Schema.Types.Date } },
  last_review: { $date: { type: Schema.Types.Date } },
  accommodates: { type: Schema.Types.Number },
  bedrooms: { type: Schema.Types.Number },
  beds: { type: Schema.Types.Number },
  number_of_reviews: { type: Schema.Types.Number },
  bathrooms: { $numberDecimal: String },
  amenities: { type: Schema.Types.Mixed },
  price: { $numberDecimal: String },
  weekly_price: { $numberDecimal: String },
  monthly_price: { $numberDecimal: String },
  security_deposit: { $numberDecimal: String },
  cleaning_fee: { $numberDecimal: String },
  extra_people: { $numberDecimal: String },
  guests_included: { $numberDecimal: String },
  images: {
    thumbnail_url: { type: Schema.Types.String },
    medium_url: { type: Schema.Types.String },
    picture_url: { type: Schema.Types.String },
    xl_picture_url: { type: Schema.Types.String },
  },
  host: {
    host_id: { type: Schema.Types.String },
    host_url: { type: Schema.Types.String },
    host_name: { type: Schema.Types.String },
    host_location: { type: Schema.Types.String },
    host_about: { type: Schema.Types.String },
    host_response_time: { type: Schema.Types.String },
    host_thumbnail_url: { type: Schema.Types.String },
    host_picture_url: { type: Schema.Types.String },
    host_neighbourhood: { type: Schema.Types.String },
    host_response_rate: { type: Schema.Types.Number },
    host_is_superhost: { type: Schema.Types.Boolean },
    host_has_profile_pic: { type: Schema.Types.Boolean },
    host_identity_verified: { type: Schema.Types.Boolean },
    host_listings_count: { type: Schema.Types.Number },
    host_total_listings_count: { type: Schema.Types.Number },
    host_verifications: { type: Schema.Types.Array },
  },
  address: {
    street: { type: Schema.Types.String },
    suburb: { type: Schema.Types.String },
    government_area: { type: Schema.Types.String },
    market: { type: Schema.Types.String },
    country: { type: Schema.Types.String },
    country_code: { type: Schema.Types.String },
    location: {
      type: { type: Schema.Types.String },
      coordinates: { type: Schema.Types.Array },
      is_location_exact: { type: Schema.Types.Boolean },
    },
  },
  availability: {
    availability_30: { type: Schema.Types.Number },
    availability_60: { type: Schema.Types.Number },
    availability_90: { type: Schema.Types.Number },
    availability_365: { type: Schema.Types.Number },
  },
  review_scores: {
    review_scores_accuracy: { type: Schema.Types.Number },
    review_scores_cleanliness: { type: Schema.Types.Number },
    review_scores_checkin: { type: Schema.Types.Number },
    review_scores_communication: { type: Schema.Types.Number },
    review_scores_location: { type: Schema.Types.Number },
    review_scores_value: { type: Schema.Types.Number },
    review_scores_rating: { type: Schema.Types.Number },
  },
  reviews: [
    {
      _id: { type: Schema.Types.String },
      date: {
        $date: { type: Schema.Types.Date },
      },
      listing_id: { type: Schema.Types.String },
      reviewer_id: { type: Schema.Types.String },
      reviewer_name: { type: Schema.Types.String },
      comments: { type: Schema.Types.String },
    },
  ],
});

export const houseContext = model<House>("House", houseSchema);
