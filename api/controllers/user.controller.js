const createError = require("../error");
const UserModel = require("../models/User.model");
const VideoModel = require("../models/Video.model");

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

// SUBSCRIBE A USER
const subscribeUser = async (req, res, next) => {
  try {
    await UserModel.findByIdAndUpdate(req.user.id, {
      // user id
      $push: { subscribedUsers: req.params.id }, // other channel id
    });

    await UserModel.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });

    return res.status(200).json("Subscription successful!");
  } catch (err) {
    next(err);
  }
};

// UNSUBSCRIBE A USER
const unsubscribeUser = async (req, res, next) => {
  try {
    await UserModel.findByIdAndUpdate(req.user.id, {
      // user id
      $pull: { subscribedUsers: req.params.id }, // other channel id
    });

    await UserModel.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 },
    });

    return res.status(200).json("Unsubscription successful!");
  } catch (err) {
    next(err);
  }
};

// LIKE A VIDEO
const likeVideo = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.videoId;

  try {
    await VideoModel.findByIdAndUpdate(videoId, {
      $addToSet: { likes: id },
      $pull: { dislikes: id },
    });

    return res.status(200).json("The video has been liked.");
  } catch (err) {
    next(err);
  }
};

// DISLIKE A VIDEO
const dislike = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.videoId;

  try {
    await VideoModel.findByIdAndUpdate(videoId, {
      $addToSet: { dislikes: id },
      $pull: { likes: id },
    });

    return res.status(200).json("The video has been disliked.");
  } catch (err) {
    next(err);
  }
};

// export
module.exports = {
  updatedUser,
  deleteUser,
  getSingleUser,
  subscribeUser,
  unsubscribeUser,
  likeVideo,
  dislike,
};
