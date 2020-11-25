const jwt = require("jsonwebtoken");
const config = require("config");

let jwtENV;

if (process.env.NODE_ENV !== "production") {
  jwtENV = config.get("jwtSecret");
} else {
  jwtENV = process.env.JWT_SECRET;
}

module.exports = function (req, res, next) {
  // Get token from the header
  const token = req.header("x-auth-token");

  // check if the token doesnt exist
  if (!token) {
    return res.status(401).json({ msg: "No Token: Authorization Denied" });
  }
  try {
    const decoded = jwt.verify(token, jwtENV);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is invalid" });
  }
};
