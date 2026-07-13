const Streamer = require('../models/Streamer');

exports.getAll = async (req, res) => {
  try {
    res.json(await Streamer.find().populate('user_id', 'username email avatar_url'));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const s = await Streamer.findById(req.params.id).populate('user_id', 'username email avatar_url');
    if (!s) return res.status(404).json({ message: 'Not found' });
    res.json(s);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    res.status(201).json(await Streamer.create({ ...req.body, user_id: req.user._id }));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const s = await Streamer.findOneAndUpdate({ _id: req.params.id, user_id: req.user._id }, req.body, { new: true });
    if (!s) return res.status(404).json({ message: 'Not found or not authorized' });
    res.json(s);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
