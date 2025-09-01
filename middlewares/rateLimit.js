const rateLimit = require("express-rate-limit");
const { env } = require("../config/env");

const limiter = rateLimit({
    windowMs: env.rateLimitWindow,
    max: env.rateLimitMax,
    message: "Too many requests from this IP, please try again later.",
});

module.exports = limiter;
