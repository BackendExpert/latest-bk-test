import UserLog from "../models/UserLog.js";

export const activityLogger = (action) => {
    return async (req, res, next) => {
        try {
            if (!req.user) return next(); // only log authenticated actions
            await UserLog.create({
                userId: req.user._id,
                action,
                ipAddress: req.ip,
                userAgent: req.headers["user-agent"],
                requestId: req.id,
                meta: { body: req.body, params: req.params },
            });
        } catch (err) {
            console.error("Activity logging failed:", err.message);
        }
        next();
    };
};
