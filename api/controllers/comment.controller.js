const createError = require("../error");
const CommentModel = require("../models/Comment.model");
const VideoModel = require("../models/Video.model");

// create a comment
const addComment = async (req, res, next) => {
  const newComment = new CommentModel({ ...req.body, userId: req.user.id });

  try {
    const savedComment = await newComment.save();
    return res.status(200).json(savedComment);
  } catch (err) {
    next(err);
  }
};

// DELETE COMMENT
const deleteComment = async (req, res, next) => {
  try {
    const comment = await CommentModel.findById(req.params.id);
    // console.log(comment);

    const video = await VideoModel.findById(req.params.id);
    console.log(video);

    if (req.user.id === comment.userId || req.user.id === video.userId) {
      await CommentModel.findByIdAndDelete(req.params.id);

      return res.status(200).json("The comment has been deleted.");
    } else {
      return next(createError(403, "You can delete ony your comment!"));
    }
  } catch (err) {
    next(err);
  }
};

// exports
module.exports = { addComment, deleteComment };
