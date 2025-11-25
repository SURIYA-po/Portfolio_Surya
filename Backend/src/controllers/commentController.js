const Comment = require("../models/Comment");

exports.addComment = async (req, res) => {
  const { postId, parentId, content } = req.body;
  if (!content) return res.status(400).json({ message: "Empty comment" });

  const comment = await Comment.create({
    post: postId,
    author: req.user._id,
    parent: parentId || null,
    content
  });

  res.status(201).json(comment);
};

exports.getCommentsForPost = async (req, res) => {
  // flat list; frontend can nest by parent
  const comments = await Comment.find({ post: req.params.postId })
    .populate("author", "name")
    .sort({ createdAt: 1 });
  res.json(comments);
};

exports.deleteComment = async (req, res) => {
  // soft delete if you want
  const c = await Comment.findOneAndUpdate(
    { _id: req.params.id, author: req.user._id },
    { isDeleted: true },
    { new: true }
  );
  if (!c) return res.status(404).json({ message: "Not found or not author" });
  res.json(c);
};
