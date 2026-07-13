const mongoose = require('mongoose');

const lensSchema = new mongoose.Schema({
  owner_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  lens_name: { type: String, required: true, trim: true },
  brand: { type: String, trim: true },
  model: { type: String, trim: true },
  origin: { type: String, trim: true },
  manufactured_year: { type: Number },
  condition: { type: String, trim: true },
  category: { type: String, trim: true },
  mount: { type: String, trim: true },
  focal_length: { type: String, trim: true },
  aperture: { max: String, min: String },
  blades: { type: Number },
  filter_thread_mm: { type: Number },
  weight_g: { type: Number },
  coating: { type: String, trim: true },
  features: [String],
  accessories_included: [String],
  image_urls: { front: String, back: String, sample_photos: [String] },
  price_per_day: { type: Number, default: 0 },
  deposit: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Lens', lensSchema);
