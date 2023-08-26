import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: [3, "Username should have at least 3 characters"],
    },
    email: {
      type: String,
      required: true,
      unique: true, 
      trim: true,
    },
    password: {
      type: String, 
      required: true,
      trim: true,
      minLength: [6, "Password should have at least 6 characters"],
    },
    age: {
      type: Number,
    },
    ph: {
      type: Number,
      required: true,
      trim: true,
      unique: true, 
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;