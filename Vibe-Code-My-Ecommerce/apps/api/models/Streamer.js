const mongoose = require('mongoose');

const streamerSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  display_name: { type: String, required: true, trim: true },
  bio: { type: String, default: '' },
  platform: { type: String, trim: true },
  games: [{ name: String, hours_played: Number }],
  packages: [{ name: String, hours: Number, price: Number, description: String }],
  availability: [{ day: String, time: String }],
  rating: { type: Number, default: 0 },
  review_count: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Streamer', streamerSchema);
