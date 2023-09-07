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
    age: {
      type: Number,
      default: 0, // Set a default value other than null
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
    ph: {
      type: Number,
      required: true,
    },
    currentPoints: {
      type: Number, 
    },
    previousPoint: {
      type: Number, 
    },
    totalPoints: {
      type: Number, 
    },
  },
  {
    timestamps: true,
  }
);  

const User = mongoose.model("User", userSchema);

export default User;
