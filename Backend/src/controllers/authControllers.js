const User = require("../models/User");
const { signToken } = require("../utils/jwt");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ message: "Missing fields" });

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: "Email already in use" });

  const user = new User({ name, email, password });
  await user.save();

  const token = signToken(user);
  res.status(201).json({ user: { id: user._id, name: user.name, email: user.email }, token });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const matched = await user.matchPassword(password);
  if (!matched) return res.status(401).json({ message: "Invalid credentials" });

  const token = signToken(user);
  res.json({ user: { id: user._id, name: user.name, email: user.email }, token });
};
