import mongoose, { Types } from "mongoose";

const CheckSchema = new mongoose.Schema(
  {
    senderAddress: { type: String },
    sendDate: { type: String },
  },
  {
    timestamps: true,
  }
);

export const CheckModel = mongoose.model("checks", CheckSchema);
