const BlogPost = require("../models/BlogPost");
const slugify = require("slugify");

exports.createPost = async (req, res) => {
  const { title, content, excerpt, tags, coverImage, isPublished } = req.body;
  const slug = slugify(title, { lower: true, strict: true });

  // ensure unique slug: append timestamp if needed
  let uniqueSlug = slug;
  let i = 1;
  while (await BlogPost.findOne({ slug: uniqueSlug })) {
    uniqueSlug = `${slug}-${Date.now()}`;
    i++;
    if (i > 5) break;
  }

  const post = await BlogPost.create({
    author: req.user._id,
    title, slug: uniqueSlug, content, excerpt, tags, coverImage, isPublished
  });
  res.status(201).json(post);
};

exports.getPost = async (req, res) => {
  const post = await BlogPost.findOne({ slug: req.params.slug }).populate("author", "name email");
  if (!post) return res.status(404).json({ message: "Not found" });
  res.json(post);
};

exports.listPosts = async (req, res) => {
  const { page = 1, limit = 10, tag, author } = req.query;
  const filter = { isPublished: true };
  if (tag) filter.tags = tag;
  if (author) filter.author = author;

  const posts = await BlogPost.find(filter)
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(parseInt(limit))
    .populate("author", "name");
  res.json(posts);
};

exports.incrementShare = async (req, res) => {
  const post = await BlogPost.findByIdAndUpdate(req.params.id, { $inc: { shares: 1 } }, { new: true });
  if (!post) return res.status(404).json({ message: "Not found" });
  res.json(post);
};
