const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: String,
  techStack: [String],
  repoUrl: String,
  liveUrl: String,
  image: String,
  isPublic: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);
