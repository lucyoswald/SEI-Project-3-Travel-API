import mongoose from "mongoose";

const itinerarySchema = mongoose.Schema(
  {
    numOfDays: { type: Number, required: false },
    activityCountry: { type: String, required: false },
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    activities: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Activity",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Itinerary", itinerarySchema);
