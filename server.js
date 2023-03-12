import express from "express";
import { connectToDb } from "./utils/db.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorhandler.js";
const app = express();
const PORT = 6000;

app.use(express.json());
app.use(logger);
app.use(errorHandler);

const startServer = async () => {
  await connectToDb();
  app.listen(PORT, () => console.log(`Server is running on ${PORT}.`));
};

startServer();
