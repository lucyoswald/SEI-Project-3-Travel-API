import userController from "./controllers/userController.js";
import express from "express";
import countryController from "./controllers/countryController.js";
import activityController from "./controllers/activityController.js";
import auth from "./middleware/auth.js";
import validate from "./middleware/validate.js";
import { body, validationResult } from "express-validator";


const router = express.Router();

router
  .route("/countries")
  .get(countryController.getAllCountryData)
  .post(auth, countryController.create);
router.route("/countries/:id").get(countryController.getById);

// Activity routes
router.route("/activities").post(auth, activityController.addActivity);

router
  .route("/activities/:id")
  .patch(auth, activityController.updateActivity)
  .delete(auth, activityController.deleteActivity);

router
  .route("/register")
  .post(
    body("email").isEmail(),
    body("role").not().contains("admin"),
    validate,
    userController.register
  );
router.route("/login").post(userController.login);

export default router;
