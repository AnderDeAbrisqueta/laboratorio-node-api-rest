import express from "express";
import { getHouse, getHouseList, insertHouse, updateHouse } from "./mock-db";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Test");
});

app.get("/api/houses", async (req, res) => {
  const houseList = await getHouseList();
  res.send(houseList);
});

app.get("/api/houses/:id", async (req, res) => {
  const { id } = req.params;
  const houseId = Number(id);
  const house = await getHouse(houseId);
  res.send(house);
});

app.post("/api/houses", async (req, res) => {
  const house = req.body;
  const newhouse = await insertHouse(house);
  res.status(201).send(newhouse);
});

app.put("/api/houses/:id", async (req, res) => {
  const { id } = req.params;
  const houseId = Number(id);
  const house = req.body;
  await updateHouse(houseId, house);
  res.sendStatus(204);
});

app.listen(3000, () => {
  console.log("Server ready at port 3000");
});
