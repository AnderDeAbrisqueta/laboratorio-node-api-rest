import { Router } from "express";
import {
  deleteHouse,
  getHouse,
  getHouseList,
  insertHouse,
  updateHouse,
} from "./mock-db";

export const houseApi = Router();

houseApi.get("/", async (req, res, next) => {
  try {
    const houseList = await getHouseList();
    // throw Error("Simulating error");
    res.send(houseList);
  } catch (error) {
    next(error);
  }
});

houseApi.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const houseId = Number(id);
    const house = await getHouse(houseId);
    res.send(house);
  } catch (error) {
    next(error);
  }
});

houseApi.post("/", async (req, res, next) => {
  try {
    const house = req.body;
    const newhouse = await insertHouse(house);
    res.status(201).send(newhouse);
  } catch (error) {
    next(error);
  }
});

houseApi.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const houseId = Number(id);
    const house = req.body;
    await updateHouse(houseId, house);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

houseApi.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const houseId = Number(id);
    await deleteHouse(houseId);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});
