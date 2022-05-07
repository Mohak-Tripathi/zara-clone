const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// process.env.SECRET_KEY
const generateToken = (user) => {
  return jwt.sign({ user }, "vikrant");
};
const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    //checking email
    if (user) {
      return res
        .status(400)
        .send({ message: "Email already exists", status: false });
    }

    // if new user, create it or allow to register;

    user = await User.create(req.body);

    const token = generateToken(user);
    return res.status(200).send({ user: user, token: token , status: true});
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    //checked if mail exists
    if (!user) {
      return res.status(400).send( {message:"Wrong Email or Password",status: false});
    }

    //if email exists, check password;
    const match = user.checkPassword(req.body.password);

    // if it doesn't match
    if (!match) {
      return res.status(400).send({ message: "Wrong Email or Password",status: false });
    }

    // if it matches
    const token = generateToken(user);
    
    return res.status(200).send({ user: user, token: token , status: true});
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

module.exports = { register, login };