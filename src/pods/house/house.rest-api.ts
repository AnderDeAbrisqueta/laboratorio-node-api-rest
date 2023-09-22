import { Router } from "express";
import { houseRepository } from "dals";
import {
  mapHouseListFromModelToApi,
  mapHouseFromModelToApi,
  mapHouseFromApiToModel,
} from "./house.mappers";

export const houseApi = Router();

houseApi.get("/", async (req, res, next) => {
  try {
    const page = Number(req.query.page);
    const pageSize = Number(req.query.pageSize);
    const country = String(req.query.country);
    let houseList = await houseRepository.getHouseList(page, pageSize, country);

    res.send(mapHouseListFromModelToApi(houseList));
  } catch (error) {
    next(error);
  }
});

houseApi.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const house = await houseRepository.getHouse(id);

    if (house) {
      res.send(mapHouseFromModelToApi(house));
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

houseApi.post("/", async (req, res, next) => {
  try {
    const house = mapHouseFromApiToModel(req.body);
    const newhouse = await houseRepository.saveHouse(house);
    res.status(201).send(mapHouseFromModelToApi(newhouse));
  } catch (error) {
    next(error);
  }
});

houseApi.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    if (await houseRepository.getHouse(id)) {
      const house = mapHouseFromApiToModel({ ...req.body, id });
      await houseRepository.saveHouse(house);
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

houseApi.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const isDeleted = await houseRepository.deleteHouse(id);
    res.sendStatus(isDeleted ? 204 : 404);
  } catch (error) {
    next(error);
  }
});
