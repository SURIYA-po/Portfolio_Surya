const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/auth");
const blog = require("../controllers/blogController");

router.post("/", protect, blog.createPost);
router.get("/", blog.listPosts);
router.get("/:slug", blog.getPost);
router.post("/:id/share", blog.incrementShare); // frontend calls this when share happens

module.exports = router;
