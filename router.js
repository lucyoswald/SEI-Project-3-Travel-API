import userController from "./controllers/userController.js";

import express from "express";
import countryController from "./controllers/countryController.js";
import activityController from "./controllers/activityController.js";
// import auth from "./middleware/auth.js";

const router = express.Router();

router
  .route("/countries")
  .get(countryController.getAllCountryData)
  .post(countryController.create);
router.route("/countries/:id").get(countryController.getById);

// Activity routes
router.route("/activities").post(activityController.addActivity);

router
  .route("/activities/:id")
  .patch(activityController.updateActivity)
  .delete(activityController.deleteActivity);

router.route("/register").post(userController.register);
router.route("/login").post(userController.login);

export default router;
