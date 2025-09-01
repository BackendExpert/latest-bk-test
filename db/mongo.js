import mongoose from "mongoose";
import { env } from "../config/env.js";

export const connectMongo = async () => {
    try {
        await mongoose.connect(env.mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ MongoDB connected");
    } catch (err) {
        console.error("Mongo connection error:", err);
        process.exit(1);
    }
};
