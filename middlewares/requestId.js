const { v4: uuidv4 } = require("uuid");

function requestId(req, res, next) {
    req.id = uuidv4();
    next();
}

module.exports = requestId;
