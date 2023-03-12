import { Express } from "express";
import activityController from "./controllers/activityController.js";

const router = express.Router();

router.route("/countriesInfo").get(countryController.getAllCountryData);

// Activity routes
//Not sure about this route think we need seeding data to move forward
router
  .route("/activities")
  .post(activityController.addActivity)
  .patch(activityController.updateActivity)
  .delete(activityController.deleteActivity);

export default router;
