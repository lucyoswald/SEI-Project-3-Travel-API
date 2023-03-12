
import express from "express";
import countryController from "./controllers/countryController.js";


const router = express.Router();

router.route("/countries").get(countryController.getAllCountryData);

// Activity routes
//Not sure about this route think we need seeding data to move forward
router
  .route("/activities")
  .post(activityController.addActivity)
  .patch(activityController.updateActivity)
  .delete(activityController.deleteActivity);

export default router;
