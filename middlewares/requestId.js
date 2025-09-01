import { v4 as uuidv4 } from "uuid";

export default function requestId(req, res, next) {
    req.id = uuidv4();
    next();
}
