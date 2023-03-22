import mongoose from "mongoose";

const countrySchema = mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    currencyName: { type: String, required: true },
    continent: { type: String, required: true },
    image: { type: String, required: true },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now(), required: true },
    createdBy: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
    numberOfLikes: { type: Number, default: 0, required: false },
    //   comments: [commentsSchema] -> May or not may not use - delete or update once we've decided
    activities: [
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

export default mongoose.model("Country", countrySchema);
