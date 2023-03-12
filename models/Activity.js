import mongoose from "mongoose";

const activitySchema = mongoose.Schema({});

const Activity = mongoose.model("Activity", activitySchema);

export default Activity;
