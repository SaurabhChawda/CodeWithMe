import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    visitHistory: [
      {
        timestamps: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

const shortUrl = mongoose.model("shortUrl", shortUrlSchema);
export { shortUrl };
