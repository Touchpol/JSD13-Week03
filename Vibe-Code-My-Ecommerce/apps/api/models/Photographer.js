const mongoose = require('mongoose');

const photographerSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  display_name: { type: String, required: true, trim: true },
  bio: { type: String, default: '' },
  phone: { type: String, trim: true },
  line_id: { type: String, trim: true },
  location: { type: String, trim: true },
  equipment: [{ camera: String, lenses: [String] }],
  portfolio_gallery: [{ url: String, caption: String, category: String }],
  pricing: {
    hourly_rate: { type: Number, default: 0 },
    half_day_rate: { type: Number, default: 0 },
    full_day_rate: { type: Number, default: 0 },
    editing_included: { type: Boolean, default: true },
    currency: { type: String, default: 'THB' }
  },
  availability: [{ date: String, slots: [String] }],
  rating: { type: Number, default: 0 },
  review_count: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Photographer', photographerSchema);
