import mongoose from "mongoose";

const userLogSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        action: { type: String, required: true }, 
        ipAddress: { type: String },
        userAgent: { type: String },
        requestId: { type: String }, 
        meta: { type: Object }, 
    },
    { timestamps: true }
);

export default mongoose.model("UserLog", userLogSchema);
