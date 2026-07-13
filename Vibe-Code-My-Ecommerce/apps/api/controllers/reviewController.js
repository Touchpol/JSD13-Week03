const Review = require('../models/Review');
const Booking = require('../models/Booking');

exports.getAll = async (req, res) => {
  try {
    const filter = {};
    if (req.query.target_type) filter.target_type = req.query.target_type;
    if (req.query.target_id) filter.target_id = req.query.target_id;
    res.json(await Review.find(filter).populate('user_id', 'username avatar_url').sort({ createdAt: -1 }));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { booking_id, target_type, target_id, rating, comment } = req.body;
    const booking = await Booking.findOne({ _id: booking_id, user_id: req.user._id });
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    if (booking.status !== 'completed') return res.status(400).json({ message: 'Can only review completed bookings' });
    if (await Review.findOne({ user_id: req.user._id, booking_id }))
      return res.status(400).json({ message: 'Already reviewed' });

    res.status(201).json(await Review.create({ user_id: req.user._id, booking_id, target_type, target_id, rating, comment }));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const r = await Review.findOneAndUpdate({ _id: req.params.id, user_id: req.user._id }, req.body, { new: true });
    if (!r) return res.status(404).json({ message: 'Not found or not authorized' });
    res.json(r);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const r = await Review.findOneAndDelete({ _id: req.params.id, user_id: req.user._id });
    if (!r) return res.status(404).json({ message: 'Not found or not authorized' });
    res.json({ message: 'Review removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
