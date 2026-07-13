const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });

exports.register = async (req, res) => {
  try {
    const { username, email, password, first_name, last_name, phone, role } = req.body;
    const exists = await User.findOne({ $or: [{ email }, { username }] });
    if (exists) return res.status(400).json({ message: 'User already exists' });

    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    const user = await User.create({ username, email, password_hash, first_name, last_name, phone, role });
    res.status(201).json({ _id: user._id, username: user.username, email: user.email, role: user.role, token: generateToken(user._id) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password_hash)))
      return res.status(400).json({ message: 'Invalid credentials' });

    res.json({ _id: user._id, username: user.username, email: user.email, role: user.role, token: generateToken(user._id) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMe = async (req, res) => {
  try {
    res.json(await User.findById(req.user._id).select('-password_hash'));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
