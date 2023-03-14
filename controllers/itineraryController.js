import Itinerary from "../models/itinerary.js";
import Activity from "../models/Activity.js";
import itinerary from "../models/itinerary.js";

// update
// create
// delete

const findAll = async (req, res, next) => {
  try {
    const allItineries = await Itinerary.find({});
    return res.status(200).json({ message: "Found", allItineries });
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  console.log("You've created.");
  const { activityId } = req.body;
  console.log(activityId);
  console.log("You made it to the create an itinerary endpoint.");
  // return res
  //   .status(200)
  //   .json({ message: "You made it to the create an itinerary endpoint." });

  try {
    // Testing we can use redirect ----
    // const allItineraries = await Itinerary.find();
    // console.log(allItineraries[0].id);
    // return res.redirect(301, `/itinerary/${allItineraries[0].id}`);
    // } catch (err) {
    //   next(err);
    // }
    // -------
    // try {
    //   const foundActivity = await Activity.findById(activityId);
    //   if (!foundActivity) {
    //     return res.status(404).json({ message: "Activity not found." });
    //   }
    //   const allItineraries = await Itinerary.find({});
    //   allItineraries.forEach((itinerary) => {
    //     if (
    //       req.currentUser.id === itinerary.createdBy &&
    //       foundActivity.activityCountry === itinerary.activityCountry
    //     ) {
    //       return res.redirect(`/itinerary/${itinerary.id}`);
    //       // status(431).json({ message: "Re-route to update." });
    //     }
    //   });
    //   const newItinerary = await Itinerary.create({
    //     createdBy: req.currentUser.id,
    //     activityCountry: foundActivity.activityCountry,
    //     activities: [activityId],
    //   });
    //   return res
    //     .status(200)
    //     .json({ message: "Success, you've created an itinerary.", newItinerary });
  } catch (err) {
    next(err);
  }
};

// Adding a new acitivty to a already created itinerary

const update = async (req, res, next) => {
  console.log("You made it to the itnerary update contoller.");
  // console.log(req);
  const itineraryId = req.params.id;
  const { activityId } = req.body;
  const itinerary = await Itinerary.findById(itineraryId);
  console.log(itinerary);
  //   if (!itinerary) {
  //     return res.status(404).json({ message: "Itinerary not found." });
  //   }

  //   const activity = await Activity.findById(activityId);
  //   if (!activity) {
  //     return res.status(404).json({ message: "Activity not found." });
  //   }

  //   if (itinerary.activityCountry !== activity.activityCountry) {
  //     return res.status(400).json({
  //       message: "Cannot add activity to itinerary with different country.",
  //     });
  //   }

  //   itinerary.activities.push(activityId);
  //   await itinerary.save();

  //   return res.status(200).json({
  //     message: `Added activity with ID ${activityId} to itinerary with ID ${itineraryId}.`,
  //     itinerary: itinerary,
  //   });

  try {
  } catch (error) {
    next(error);
  }
};

export default {
  update,
  add,
  findAll,
};
