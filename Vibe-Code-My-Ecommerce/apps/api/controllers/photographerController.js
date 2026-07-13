const Photographer = require('../models/Photographer');

exports.getAll = async (req, res) => {
  try {
    res.json(await Photographer.find().populate('user_id', 'username email avatar_url'));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const p = await Photographer.findById(req.params.id).populate('user_id', 'username email avatar_url');
    if (!p) return res.status(404).json({ message: 'Not found' });
    res.json(p);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    res.status(201).json(await Photographer.create({ ...req.body, user_id: req.user._id }));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const p = await Photographer.findOneAndUpdate({ _id: req.params.id, user_id: req.user._id }, req.body, { new: true });
    if (!p) return res.status(404).json({ message: 'Not found or not authorized' });
    res.json(p);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
