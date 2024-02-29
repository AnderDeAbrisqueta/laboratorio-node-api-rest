import { ObjectId } from "mongodb";

export interface House {
  _id: ObjectId;
  listing_url: string;
  name: string;
  // summary?: string;
  // space?: string;
  description: string;
  // neighborhood_overview?: string;
  // notes?: string;
  // transit?: string;
  // access?: string;
  // interaction?: string;
  // house_rules?: string;
  // property_type?: string;
  // room_type?: string;
  // bed_type?: string;
  // minimum_nights?: string;
  // maximum_nights?: string;
  // cancellation_policy?: string;
  // last_scraped?: Date;
  // calendar_last_scraped?: Date;
  // first_review?: Date;
  // last_review?: Date;
  // accommodates?: number;
  bedrooms: number;
  beds: number;
  // number_of_reviews?: number;
  bathrooms: number;
  // amenities?: string[];
  price?: number;
  // weekly_price?: number;
  // monthly_price?: number;
  // security_deposit?: number;
  // cleaning_fee?: number;
  // extra_people?: number;
  // guests_included?: number;
  // images?: Object;
  // host?: Object;
  address?: Object;
  // availability?: Object;
  // review_scores?: Object;
  reviews: Review[];
}

export interface Review {
  _id: string;
  date: Date;
  listing_id?: string;
  reviewer_id?: string;
  reviewer_name?: string;
  comments: string;
}
