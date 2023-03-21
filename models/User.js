import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: { type: String, required: true, unigue: true },
    userName: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    // itineraries: {
    //   type: mongoose.Schema.ObjectId,
    //   ref: "Itinerary",
    //   required: false,
    // },
    itinerary: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Activity",
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
