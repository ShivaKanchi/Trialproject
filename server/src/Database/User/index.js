import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { Type: String },
    phone: { Type: Number },
  },
  {
    timestamps: true,
  }
);
export const UserModel = mongoose.model("users", UserSchema);
