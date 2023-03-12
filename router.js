import { Express } from "express";

const router = express.Router();

router.route("/countriesInfo").get(countryController.getAllCountryData);

export default router;
