const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('./config/logger.js');
const rateLimit = require('./middlewares/rateLimit.js');
const errorHandler = require('./middlewares/error.js');
const requestId = require('./middlewares/requestId.js');
const authRoutes = require('./routes/auth.routes.js');

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(logger);
app.use(rateLimit);
app.use(requestId);

// Routes
app.use("/api/v1/auth", authRoutes);

// Error handler
app.use(errorHandler);

module.exports = app; // << This line is required
