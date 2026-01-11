import mongoose from "mongoose";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../constants/regex.js";
import { ROLE_ADMIN, ROLE_MERCHANT, ROLE_USER } from "../constants/roles.js";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: (value) => {
       return  EMAIL_REGEX.test(value)
        // return true for valid, false for invalid
       
      },
      message: "Invalid e-mail address", // fixed syntax
    },
  },
  phone: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    // validate: {
    //   validator: (value) => {
    //    return  PASSWORD_REGEX.test(value)
    //     // return true for valid, false for invalid
       
    //   },
    //   message: "Password must contain upperCase & lowerCase, number and special character", // fixed syntax
    // },
  },

  address: {
    city: String,
    country: String,
    province: String,
    street: String,
  },

  profileImageUrl: {
    type: String,
  },

  roles: {
    type: [String],
    default: ["USER"],
    enum: [ROLE_USER, ROLE_ADMIN, ROLE_MERCHANT ],  // roles.js bata auuxa yo
    uppercase: true,
  },

  createdAt: {
    type: Date, // ✅ valid Mongoose type
    default: Date.now, // ✅ function reference, not a number
  },
});

const model = mongoose.model("User", userSchema);

export default model;
