import Country from "../models/Country.js";

const getAllCountryData = async (req, res, next) => {
  console.log("You've reached the get all country info");
  
  const data = await Country.find({});
  return res.status(200).json({ message: "Success", data });
};

export default {
  getAllCountryData,
};
