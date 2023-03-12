import express from "express";

import countryController from "./controllers/countryController.js";

const router = express.Router();

router.route("/countries").get(countryController.getAllCountryData);

export default router;
