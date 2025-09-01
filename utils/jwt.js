const jwt = require("jsonwebtoken");
const { env } = require("../config/env");

const signJwt = (payload) => {
  return jwt.sign(payload, env.jwtSecret, { expiresIn: env.jwtExpiresIn });
};

module.exports = { signJwt };
