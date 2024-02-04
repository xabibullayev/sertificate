import mongoose from "mongoose";

const countSchema = new mongoose.Schema(
  {
    simvol: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Count = mongoose.model("Count", countSchema);

export default Count;
