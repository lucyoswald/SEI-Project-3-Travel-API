import mongoose from "mongoose";

const itinerarySchema = mongoose.Schema(
  {
    numOfDays: { type: Number, required: true },
    activities: {
      type: mongoose.Schema.ObjectId,
      ref: "Activity",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Itinerary", itinerarySchema);
