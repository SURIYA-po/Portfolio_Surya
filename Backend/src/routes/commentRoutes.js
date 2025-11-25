const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth");
const comments = require("../controllers/commentController");

router.post("/", protect, comments.addComment);
router.get("/post/:postId", comments.getCommentsForPost);
router.delete("/:id", protect, comments.deleteComment);

module.exports = router;
