const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const blogRoutes = require("./routes/blogRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/comments", commentRoutes);

// simple health
app.get("/api/ping", (req, res) => res.json({ ok: true }));

// error handler simple
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Server error" });
});

module.exports = app;
