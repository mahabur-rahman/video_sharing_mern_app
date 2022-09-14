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

// export
module.exports = {
  updatedUser,
};
