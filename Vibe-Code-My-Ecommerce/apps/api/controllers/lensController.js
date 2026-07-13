const Lens = require('../models/Lens');

exports.getAll = async (req, res) => {
  try {
    const filter = {};
    if (req.query.brand) filter.brand = req.query.brand;
    if (req.query.category) filter.category = req.query.category;
    if (req.query.mount) filter.mount = req.query.mount;
    if (req.query.min_price) filter.price_per_day = { $gte: Number(req.query.min_price) };
    if (req.query.max_price) filter.price_per_day = { ...filter.price_per_day, $lte: Number(req.query.max_price) };

    res.json(await Lens.find(filter).populate('owner_id', 'username email'));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const l = await Lens.findById(req.params.id).populate('owner_id', 'username email');
    if (!l) return res.status(404).json({ message: 'Not found' });
    res.json(l);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    res.status(201).json(await Lens.create({ ...req.body, owner_id: req.user._id }));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const l = await Lens.findOneAndUpdate({ _id: req.params.id, owner_id: req.user._id }, req.body, { new: true });
    if (!l) return res.status(404).json({ message: 'Not found or not authorized' });
    res.json(l);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const l = await Lens.findOneAndDelete({ _id: req.params.id, owner_id: req.user._id });
    if (!l) return res.status(404).json({ message: 'Not found or not authorized' });
    res.json({ message: 'Lens removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
