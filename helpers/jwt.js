const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRETKEY;

// Expired 30 day
function signatureJwt(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: "30d" });
}

function verifyJwt(token) {
  return jwt.verify(token, secretKey);
}

module.exports = {
  signatureJwt,
  verifyJwt,
};
