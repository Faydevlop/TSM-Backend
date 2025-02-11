import mongoose, { Schema, Document, Types } from "mongoose";

export interface ITask extends Document {
    title: string;
    description: string;
    status: "pending" | "in-progress" | "completed";
    createdAt: Date;
    dueDate: Date;
    assignedTo: Types.ObjectId;
}

const TaskSchema = new Schema<ITask>(
    {
        title: { type: String, required: true },
        description: { type: String },
        status: { type: String, enum: ["pending", "in-progress", "completed"], default: "pending" },
        createdAt: { type: Date, default: Date.now },
        dueDate: { type: Date, required: true }, // ✅ Added dueDate here
        assignedTo: { type: Schema.Types.ObjectId, ref: "User", required: true },
    },
    { timestamps: true }
);

export default mongoose.model<ITask>("Task", TaskSchema);
