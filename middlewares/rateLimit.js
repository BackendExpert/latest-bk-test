import rateLimit from "express-rate-limit";
import { env } from "../config/env.js";

export default rateLimit({
    windowMs: env.rateLimitWindow,
    max: env.rateLimitMax,
    message: "Too many requests from this IP, please try again later.",
});
