const CommentModel = require("../models/Comment.model");

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

// exports
module.exports = { addComment };
