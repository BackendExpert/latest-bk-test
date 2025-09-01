import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { env } from "../config/env.js";

export default async function auth(req, res, next) {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(401).json({ error: "Unauthorized" });

        const decoded = jwt.verify(token, env.jwtSecret);
        const user = await User.findById(decoded.id).populate("role");
        if (!user) return res.status(401).json({ error: "Unauthorized" });

        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({ error: "Invalid token" });
    }
}
