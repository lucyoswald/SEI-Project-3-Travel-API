import express from "express";
import { connectToDb } from "./utils/db.js";
import logger from "./middleware/logger.js";
import router from "./router.js";
import errorHandler from "./middleware/errorhandler.js";
import fallThroughHandler from "./middleware/fallthroughHandler.js";

const app = express();
const PORT = 6000;

app.use(express.json());
app.use(logger);
app.use(router);
app.use(errorHandler);
app.use(fallThroughHandler);

const startServer = async () => {
  await connectToDb();
  app.listen(PORT, () => console.log(`Server is running on ${PORT}.`));
};

startServer();
