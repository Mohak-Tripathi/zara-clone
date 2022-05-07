var jwt = require("jsonwebtoken");
require("dotenv").config();
process.env.SECRET_KEY
const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, "vikrant", (err, decoded) => {
      if (err) return reject(err);

      return resolve(decoded);
    });
  });
};

const authenticate = async (req, res, next) => {
  if (!req.headers.authorization)
    return res
      .status(400)
      .send({
        message: "Authorization token not found or incorrect",
        status: false,
      });

  if (!req.headers.authorization.startsWith("Bearer "))
    return res
      .status(400)
      .send({
        message: "Authorization token not found or incorrect",
        status: false,
      });

  const token = req.headers.authorization.trim().split(" ")[1];

  let decoded;
  try {
    decoded = await verifyToken(token);
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .send({
        message: "Authorization token not found or incorrect",
        status: false,
      });
  }
 console.log(decoded)
  req.user = decoded.user._id;

  return next();
};

module.exports = authenticate;