import Country from "../models/Country.js";

const getAllCountryData = async (req, res, next) => {
  try {
    const data = await Country.find({});
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
    const countryData = await Country.findById(id);
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
  const newInfo = {
    ...req.body,
    createdBy: "64036a6ff49ce0b73b35a8cb",
  };
  // CREATED BY WILL NEED TO BE UPDATED TO req.currentUser.id, once we get the auth completed
  try {
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

export default {
  getAllCountryData,
  getById,
  create,
};
