const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password_hash: { type: String, required: true },
  first_name: { type: String, trim: true },
  last_name: { type: String, trim: true },
  phone: { type: String, trim: true },
  role: { type: String, enum: ['customer', 'photographer', 'streamer', 'admin'], default: 'customer' },
  avatar_url: { type: String, default: '' },
  shopping_cart: { type: mongoose.Schema.Types.Mixed, default: null }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
