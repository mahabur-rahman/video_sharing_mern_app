const UserModel = require("../models/User.model");
const bcrypt = require("bcryptjs");
// custom errorHandler
const createError = require("../error");

const registerUser = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = await new UserModel({ ...req.body, password: hash });

    await newUser.save();

    return res.status(201).json({ message: "User has been created!" });
  } catch (err) {
    // next(createError("500", "sorry not found!"));
    next(err);
  }
};

module.exports = { registerUser };
