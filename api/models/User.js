import mongoose from "mongoose";

const userSchama = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    mobile: {
      type: String,
      default: null,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      default: "Author",
    },
    photo: {
      type: String,
      default: null,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "undefined"],
      default: "undefined",
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// export default
export default mongoose.model("User", userSchama);
