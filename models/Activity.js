import mongoose from "mongoose";

const activitySchema = mongoose.Schema({
  category: { type: String, required: true },
  activityCountry: { type: String, required: true },
  name: { type: String, required },
  description: { type: String, required: false },
  location: { type: String, required: true },
  // price: {type: Number, required: true},
  price: {
    type: Number,
    required: true,
    min: 0,
    get: (val) =>
      new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "GBP",
      }).format(val),
  },
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
