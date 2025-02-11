import jwt from "jsonwebtoken";
import mongoose from "mongoose";

export const generateToken = (userId:  mongoose.Types.ObjectId | string): string => {
    return jwt.sign({ id: userId.toString() }, process.env.JWT_SECRET!, {
        expiresIn: "7d",
      });
};
