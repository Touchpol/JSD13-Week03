const Booking = require('../models/Booking');

exports.getAll = async (req, res) => {
  try {
    const filter = { user_id: req.user._id };
    if (req.query.status) filter.status = req.query.status;
    if (req.query.booking_type) filter.booking_type = req.query.booking_type;
    res.json(await Booking.find(filter).sort({ createdAt: -1 }));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const b = await Booking.findOne({ _id: req.params.id, user_id: req.user._id });
    if (!b) return res.status(404).json({ message: 'Not found' });
    res.json(b);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { booking_type, ref_id, booking_details, pricing } = req.body;
    const booking = await Booking.create({
      user_id: req.user._id, booking_type, ref_id, booking_details, pricing,
      timeline: [{ status: 'pending', timestamp: new Date() }]
    });
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const b = await Booking.findOne({ _id: req.params.id, user_id: req.user._id });
    if (!b) return res.status(404).json({ message: 'Not found' });

    const { status, payment_method, payment_slip_url } = req.body;
    if (status) b.status = status;
    if (payment_method) b.payment_method = payment_method;
    if (payment_slip_url) { b.payment_slip_url = payment_slip_url; b.payment_status = 'paid'; }
    b.timeline.push({ status: b.status, timestamp: new Date() });
    await b.save();
    res.json(b);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
