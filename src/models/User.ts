import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
    _id:mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  role: string;
  profilePicture?: string; // Optional field
  otp: string;
  isVerified: boolean;
  assignedTasks:number;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "regularuser"], default: "regularuser" }, // Default role
    profilePicture: { type: String, default: "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg?semt=ais_hybrid" },
    otp: { type: String, required: true },
    assignedTasks:{type:Number,default:0},
  isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);
