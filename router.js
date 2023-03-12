import express from "express";
import userController from "./controllers/userController.js";

const router = express.Router();

// router.route("/countriesInfo").get(countryController.getAllCountryData);

router.route("/register").post(userController.register);
router.route("/login").post(userController.login);
export default router;
