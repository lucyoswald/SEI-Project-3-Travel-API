import Activity from "../models/Activity.js";
import Country from "../models/Country.js";

// Adding a new activity using POST

const addActivity = async (req, res, next) => {
  const newActivity = { ...req.body, createdBy: req.currentUser.id };
  // console.log(req.currentUser);
  // console.log(newActivity);

  try {
    const addedActivity = await Activity.create(newActivity);
    // console.log(addedActivity);
    // console.log(`this is the country id ${newActivity.activityCountry}`);
    const countryToAddTo = await Country.findById(newActivity.activityCountry);
    if (!countryToAddTo) {
      return res.status(404).json({ message: "Country not found." });
    }
    console.log(countryToAddTo);
    // console.log(`addedActivity id ${addedActivity.id}`);
    countryToAddTo.activities.push(addedActivity.id);
    const activityAdded = await countryToAddTo.save();

    return res.status(200).json({
      message: "Successfully created a new activity in our database!",
      activityAdded,
    });
  } catch (err) {
    next(err);
  }
};

//All of these routes work have tested them but have had to alter until auth -- will update again!!
// So the createdBy property has been commented out / any use of .currentUser until we make it

// UPDATE an activity
const updateActivity = async (req, res, next) => {
  const id = req.params.id;
  const dataToUpdate = req.body;

  try {
    const foundActivity = await Activity.findById(id);

    if (!foundActivity) {
      return res.status(404).json({
        message: `Can't find activity with id ${id}, please try again!`,
      });
    }

    if (
      req.currentUser.id !== foundActivity.createdBy.toString() &&
      req.currentUser.role != "admin"
    ) {
      return res.status(403).json({ message: "Unauthorized user" });
    }

    const updatedActivity = await Activity.findByIdAndUpdate(id, dataToUpdate, {
      returnDocument: "after",
    });

    return res
      .status(200)
      .json({ message: `Activity ${updatedActivity} has been updated!` });
  } catch (err) {
    next(err);
  }
};
// DELETE an activity

const deleteActivity = async (req, res, next) => {
  const { id } = req.params;

  if (req.currentUser.role != "admin") {
    return res.status(403).json({
      message:
        "Only admins or users that created this specific activity can delete entries!",
    });
  }

  try {
    const deletedActivity = await Activity.findByIdAndDelete(id);
    if (deletedActivity) {
      return res
        .status(200)
        .json({ message: "Activity was deleted", deletedActivity });
    } else {
      return res.status(404).json({
        message: `No activity with that id ${id} has been found, please try again!`,
      });
    }
  } catch (err) {
    next(err);
  }
};

export default {
  addActivity,
  updateActivity,
  deleteActivity,
};
