const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

dotenv.config({ path: '../.env' });

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
  res.json({ message: 'SnapPlay API is running' });
});

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/photographers', require('./routes/photographerRoutes'));
app.use('/api/streamers', require('./routes/streamerRoutes'));
app.use('/api/lenses', require('./routes/lensRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/reviews', require('./routes/reviewRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
