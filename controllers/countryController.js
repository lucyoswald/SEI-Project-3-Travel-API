import Country from "../models/Country.js";
import { adminId } from "../utils/seeding-data.js";

const getAllCountryData = async (req, res, next) => {
  try {
    const data = await Country.find({}).populate("activities");
    if (Object.keys(data).length) {
      return res.status(200).json({ message: "Success", data });
    } else {
      return res
        .status(404)
        .json({ message: "Database currently contains no data." });
    }
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const countryData = await Country.findById(id).populate("activities");
    if (countryData) {
      return res.status(200).json({ message: "Data Found", countryData });
    } else {
      return res
        .status(404)
        .json({ message: `No data found for a country with an id of: ${id}.` });
    }
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  const { id } = req.currentUser;
  console.log(id);
  const newInfo = {
    ...req.body,
    createdBy: id,
  };
  try {
    if (id !== adminId) {
      return res.status(403).json({
        message: "Only site admins can created new Country profiles.",
      });
    }
    const exists = await Country.findOne({ name: newInfo.name });
    if (exists) {
      return res.status(403).json({
        message: `Entry with a name of ${newInfo.name} already exists.`,
      });
    }
    const createdCountry = await Country.create(newInfo);
    return res.status(200).json({
      message: `New ${createdCountry.name} entry created.`,
      createdCountry,
    });
  } catch (err) {
    next(err);
  }
};

// DELETE an activity

//Like button update
const countryLikes = async (req, res, next) => {
  //Declare new item in my body
  //The value  of that will determine whether its to count up or count down
  //Then you need an if statement to check the value of the that field
  //

  const { id } = req.params;
  console.log(req.params);
  console.log("Req.body", req.body);
  const { numberOfLikes } = req.body;

  try {
    console.log({ numberOfLikes });
    const foundCountry = await Country.findByIdAndUpdate(
      id,
      { numberOfLikes },
      {
        returnDocument: "after",
      }
    );
    console.log(foundCountry);
    if (!foundCountry) {
      return res
        .status(404)
        .json({ message: `No country with that ${id} has been found` });
    } else {
      return res.status(200).json({
        message: `Like button updated`,
        foundCountry,
      });
    }
  } catch (err) {
    next(err);
  }
};

export default {
  getAllCountryData,
  getById,
  create,
  countryLikes,
};
