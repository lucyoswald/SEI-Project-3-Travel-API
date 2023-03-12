// import Activity from "../models/Activity";

// Adding a new activity using POST

const addActivity = async (req, res, next) => {
  return res.status(200).json({ message: "Our endpoint is running" });
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
