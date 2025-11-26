const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  const { title, description, techStack, repoUrl, liveUrl, isPublic } = req.body;
 let projectImage = null;
    if (req.file) {
      projectImage = `${req.protocol}://${req.get("host")}/uploads/projectpics/${req.file.filename}`;
    }
  const data = {
    owner: req.user._id,
    title,
    description,
    techStack,
    repoUrl,
    liveUrl,
    isPublic,
    image: projectImage
  };
  const project = await Project.create(data);
  res.status(201).json(project);
};

exports.getMyProjects = async (req, res) => {
  const projects = await Project.find({ owner: req.user._id });
  res.json(projects);
};

exports.getPublicProjects = async (req, res) => {
  const projects = await Project.find({ isPublic: true }).populate("owner", "name");
  res.json(projects);
};

exports.updateProject = async (req, res) => {
  const project = await Project.findOneAndUpdate({ _id: req.params.id, owner: req.user._id }, req.body, { new: true });
  if (!project) return res.status(404).json({ message: "Project not found or not yours" });
  res.json(project);
};

exports.deleteProject = async (req, res) => {
  const project = await Project.findOneAndDelete({ _id: req.params.id, owner: req.user._id });
  if (!project) return res.status(404).json({ message: "Project not found or not yours" });
  res.json({ message: "Deleted" });
};
