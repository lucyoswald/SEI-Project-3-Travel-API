import userController from "./controllers/userController.js";
import activityController from "./controllers/activityController.js";
import express from "express";
import countryController from "./controllers/countryController.js";

const router = express.Router();

router.route("/countries").get(countryController.getAllCountryData);

// Activity routes

router.route("/activities").post(activityController.addActivity);

router
  .route("/activities/activityCountry/name")
  .patch(activityController.updateActivity)
  .delete(activityController.deleteActivity);

router.route("/register").post(userController.register);
router.route("/login").post(userController.login);
export default router;
