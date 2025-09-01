const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

// Ensure logs folder exists
const logsDir = path.join(__dirname, "..", "logs");
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
}

const logStream = fs.createWriteStream(path.join(logsDir, "access.log"), { flags: "a" });

const logger = morgan("combined", { stream: logStream });

module.exports = logger;
