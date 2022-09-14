const createError = require("../error");
const UserModel = require("../models/User.model");

const updatedUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updateUser = await UserModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );

      return res.status(200).json(updateUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "you can update only your account!"));
  }
};

// DELETE USER
const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await UserModel.findByIdAndDelete(req.params.id);
      return res.status(200).json("user has been deleted...");
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "you can delete only your account!"));
  }
};

// GET SINGLE USER
const getSingleUser = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);

    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

// export
module.exports = {
  updatedUser,
  deleteUser,
  getSingleUser,
};
