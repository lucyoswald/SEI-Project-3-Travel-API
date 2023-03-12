import mongoose from "mongoose";
import User from "./user.js";
import Activity from "./Activity.js";

const countrySchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    currency: { type: Number, required: true },
    continent: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
    createdBy: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
    //   comments: [commentsSchema] -> May or not may not use - delete or update once we've decided
    activities: {
      type: mongoose.Schema.ObjectId,
      ref: "Activity",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Country = mongoose.model("Country", countrySchema);

export default Country;
