import dotenv from "dotenv";
dotenv.config();

export const env = {
    port: process.env.PORT || 5000,
    mongoUri: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1d",
    frontendUrl: process.env.FRONTEND_URL || "*",
    rateLimitWindow: parseInt(process.env.RATE_LIMIT_WINDOW),
    rateLimitMax: parseInt(process.env.RATE_LIMIT_MAX),
    systemEmail: process.env.EMAIL_USER,
    systemEmailPass: process.env.EMAIL_PASSWORD
};
