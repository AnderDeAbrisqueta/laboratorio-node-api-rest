import express from "express";
import cors from "cors";
import path from "path";
import { envConstants } from "../constants";

export const createRestApiServer = () => {
  const restApiServer = express();
  restApiServer.use(express.json());
  restApiServer.use(
    cors({
      methods: envConstants.CORS_METHODS,
      origin: envConstants.CORS_ORIGIN,
      credentials: true,
    })
  );

  restApiServer.use(
    "/",
    express.static(path.resolve(__dirname, envConstants.STATIC_FILES_PATH))
  );

  return restApiServer;
};
