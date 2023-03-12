import Activity from "../models/Activity";

// Adding a new activity using POST

const addActivity = async (req, res, next) => {
  const newActivity = { ...req.body, createdBy: req.currentUser.id };

  console.log(req.currentUser);
  try {
    const dbResponse = await Activity.create(newActivity);
    return res.status(200).json({
      message: "Successfully created a new activity in our database!",
    });
  } catch (err) {
    next(err);
  }
};

// UPDATE an activity
const updateActivity = async (req, res, next) => {
  return res.status(200).json({ message: "Our endpoint is running" });
};
// DELETE an activity

const deleteActivity = async (req, res, next) => {
  return res.status(200).json({ message: "Our endpoint is running" });
};

export default {
  addActivity,
  updateActivity,
  deleteActivity,
};
