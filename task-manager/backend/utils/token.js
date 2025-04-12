const jwt = require("jsonwebtoken");
const SECRET = "your-secret-key";

const generateToken = (username) => {
  return jwt.sign({ username }, SECRET, { expiresIn: "1d" });
};

module.exports = { generateToken };

