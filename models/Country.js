import mongoose from "mongoose";
// import User from "./user.js";
// import Activity from "./Activity.js";

const countrySchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    currencyName: { type: String, required: true },
    continent: { type: String, required: true },
    createdAt: { type: Date, default: Date.now(), required: true },
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

export default mongoose.model("Country", countrySchema);
