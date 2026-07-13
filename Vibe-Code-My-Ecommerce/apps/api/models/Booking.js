const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  booking_type: { type: String, enum: ['photographer', 'lens', 'streamer'], required: true },
  ref_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  booking_details: { type: mongoose.Schema.Types.Mixed, default: {} },
  pricing: {
    subtotal: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    insurance: { type: Number, default: 0 },
    deposit: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    currency: { type: String, default: 'THB' }
  },
  status: { type: String, enum: ['pending', 'confirmed', 'in_progress', 'completed', 'cancelled'], default: 'pending' },
  payment_method: { type: String, default: '' },
  payment_status: { type: String, enum: ['unpaid', 'paid', 'refunded'], default: 'unpaid' },
  payment_slip_url: { type: String, default: '' },
  timeline: [{ status: String, timestamp: { type: Date, default: Date.now } }]
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
