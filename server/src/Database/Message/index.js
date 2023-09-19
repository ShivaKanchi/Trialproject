import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
  },
  {
    timestamps: true,
  }
);
export const MessageModel = mongoose.model("messages", MessageSchema);
