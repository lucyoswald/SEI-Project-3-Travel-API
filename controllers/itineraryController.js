import Itinerary from "../models/Itinerary.js";
import Activity from "../models/Activity.js";

// update
// create
// delete

const getItinerary = async (req, res, next) => {
  try {
    const ownItinerary = await Itinerary.find({});
    return res.status(200).json({ message: "Found", ownItinerary });
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  const { activityId } = req.body;
  try {
    const foundActivity = await Activity.findById(activityId);
    if (!foundActivity) {
      return res.status(404).json({ message: "Activity not found." });
    }
    const newItinerary = await Itinerary.create({
      createdBy: req.currentUser.id,
      activityCountry: foundActivity.activityCountry,
      activities: [activityId],
    });
    return res
      .status(200)
      .json({ message: "Success, you've created an itinerary.", newItinerary });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  console.log("updateItinerary reached");
  const { itineraryId, activityId } = req.body;
  try {
    const foundItinerary = await Itinerary.findById(itineraryId);
    if (!foundItinerary) {
      return res.status(404).json({ message: "Itinerary not found." });
    }
    const foundActivity = await Activity.findById(activityId);
    if (!foundActivity) {
      return res.status(404).json({ message: "Activity not found." });
    }
    foundItinerary.activities.push(activityId);
    const updatedItinerary = await foundItinerary.save();
    return res.status(200).json({
      message: "Success, you've added an activity to the itinerary.",
      updatedItinerary,
    });
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  const { id } = req.params;
  try {
    const itineraryToDelete = await Itinerary.findByIdAndDelete(id);
    if (!itineraryToDelete) {
      return res.status(404).json({
        message: `No itinerary with the id ${id} has been found`,
      });
    }
    return res
      .status(200)
      .json({ message: "Itinerary was deleted", itineraryToDelete });
  } catch (err) {
    next(err);
  }
};

export default {
  getItinerary,
  update,
  create,
  remove,
};
