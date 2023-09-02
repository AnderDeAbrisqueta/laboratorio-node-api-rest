import express from "express";
import path from "path";
import { houseApi } from "./houses.api";

const app = express();

app.use(express.json());
app.use("/", express.static(path.resolve(__dirname, "../public")));

app.use("/api/houses", houseApi);

app.use(async (error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

app.listen(3000, () => {
  console.log("Server ready at port 3000");
});
