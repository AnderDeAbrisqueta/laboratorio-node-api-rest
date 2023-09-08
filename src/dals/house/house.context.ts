import { db } from "core/servers";
import { House } from "./house.model";

export const getHouseContext = () => db?.collection<House>("houses");
