import {
  logRequestMiddleware,
  logErrorRequestMiddleware,
} from "common/middlewares";
import { connectToDBServer, createRestApiServer } from "core/servers";
import { envConstants } from "core/constants";
import { houseApi } from "./pods/house";

const restApiServer = createRestApiServer();

restApiServer.use(logRequestMiddleware);
restApiServer.use("/api/houses", houseApi);
restApiServer.use(logErrorRequestMiddleware);

restApiServer.use(async (error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

restApiServer.listen(envConstants.PORT, async () => {
  if (!envConstants.isApiMock) {
    await connectToDBServer(envConstants.MONGODB_URI);
    console.log("Connect to DB");
  } else {
    console.log("Running API mock");
  }
  console.log(`Server ready at port ${envConstants.PORT}`);
});
