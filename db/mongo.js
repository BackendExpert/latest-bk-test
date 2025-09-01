const mongoose = require("mongoose");
const { env } = require("../config/env");

const connectMongo = async () => {
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

module.exports = { connectMongo };
