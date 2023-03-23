import mongoose from "mongoose";

const activitySchema = mongoose.Schema({
  category: { type: String, required: true },
  activityCountry: {
    type: mongoose.Schema.ObjectId,
    ref: "Country",
    required: false,
  },
  name: { type: String, required: false },
  description: { type: String, required: false },
  location: { type: String, required: true },
  price: { type: Number, required: false },
  imageUrl: { type: String, required: false },
  linkToWebsite: { type: String, required: false },
  createdBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

const Activity = mongoose.model("Activity", activitySchema);

export default Activity;
