const UserModel = require("../models/User.model");
const bcrypt = require("bcryptjs");
// custom errorHandler
const createError = require("../error");
const jwt = require("jsonwebtoken");

// REGISTER | CREATE USER | POST METHOD

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

// LOGIN | POST METHOD
const loginUser = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ name: req.body.name });
    // console.log(user);
    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) return next(createError(400, "Wrong credentials!"));

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    const { password, ...others } = user._doc;

    return res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (err) {
    next(err);
  }
};

// GOOGLE AUTH
const googleAuth = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      return res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(user._doc);
    } else {
      const newUser = new UserModel({
        ...req.body,
        fromGoogle: true,
      });

      const savedUser = await newUser.save();
      const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);

      return res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(savedUser._doc);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { registerUser, loginUser, googleAuth };
