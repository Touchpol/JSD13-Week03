const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  booking_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: true },
  target_type: { type: String, enum: ['photographer', 'lens', 'streamer'], required: true },
  target_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
