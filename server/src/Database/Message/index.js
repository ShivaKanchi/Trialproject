import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { Type: String },
  phone: { Type: Number },
});
export const MessageModel = mongoose.model("messages", MessageSchema);
