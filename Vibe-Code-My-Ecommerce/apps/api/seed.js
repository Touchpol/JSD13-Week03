const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

dotenv.config({ path: '../.env' });

const User = require('./models/User');
const Photographer = require('./models/Photographer');
const Streamer = require('./models/Streamer');
const Lens = require('./models/Lens');

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    await Promise.all([
      User.deleteMany({}), Photographer.deleteMany({}),
      Streamer.deleteMany({}), Lens.deleteMany({})
    ]);
    console.log('Cleared old data');

    const hashPassword = async (pw) => await bcrypt.hash(pw, 10);

    const users = await User.insertMany([
      { username: 'albert_v', email: 'albert@example.com', password_hash: await hashPassword('1234'), role: 'customer', first_name: 'Albert', phone: '081-111-2233' },
      { username: 'chris_b', email: 'chris@example.com', password_hash: await hashPassword('1234'), role: 'customer', first_name: 'Chris', phone: '081-999-8877' },
      { username: 'barb_q', email: 'bbq@example.com', password_hash: await hashPassword('1234'), role: 'customer', first_name: 'Barb', phone: '082-444-5566' },
      { username: 'spiderman', email: 'spiderman@example.com', password_hash: await hashPassword('1234'), role: 'photographer', first_name: 'Spider', last_name: 'Man', phone: '055-555-5555' },
      { username: 'robin_banks', email: 'robin@example.com', password_hash: await hashPassword('1234'), role: 'photographer', first_name: 'Robin', last_name: 'Banks', phone: '066-666-6666' },
      { username: 'gamemaster', email: 'gm99@example.com', password_hash: await hashPassword('1234'), role: 'streamer', first_name: 'Donald', last_name: 'Duck', phone: '077-777-7777' },
      { username: 'oleg_r', email: 'oleg@example.com', password_hash: await hashPassword('1234'), role: 'customer', first_name: 'Oleg', phone: '088-888-8888' },
      { username: 'alexei_s', email: 'alexei@example.com', password_hash: await hashPassword('1234'), role: 'customer', first_name: 'Alexei', phone: '099-999-9999' }
    ]);
    console.log(`Created ${users.length} users`);

    await Photographer.insertMany([
      {
        user_id: users[3]._id, display_name: 'SPM Photography',
        bio: 'ช่างภาพมืออาชีพ 20 ปี เชี่ยวชาญพอร์ตเทรต งานแต่งงาน และผลิตภัณฑ์',
        phone: '055-555-5555', line_id: '@spm_photo', location: 'กรุงเทพฯ',
        equipment: [
          { camera: 'Sony A7 IV', lenses: ['Sony 50mm f/1.2', 'Sony 85mm f/1.4', 'Sony 24-70mm f/2.8'] },
          { camera: 'Canon EOS R5', lenses: ['Canon 35mm f/1.4', 'Canon 70-200mm f/2.8'] }
        ],
        pricing: { hourly_rate: 1000, half_day_rate: 3500, full_day_rate: 6000 },
        availability: [
          { date: '2026-07-19', slots: ['09:00-12:00', '13:00-16:00'] },
          { date: '2026-07-20', slots: ['10:00-13:00'] }
        ],
        rating: 4.9, review_count: 48
      },
      {
        user_id: users[4]._id, display_name: 'Robin Banks Photography',
        bio: 'ช่างภาพสายแฟชั่นและสตรีท ถนัด Editorial และ Lifestyle',
        phone: '066-666-6666', line_id: '@robinbanks', location: 'เชียงใหม่',
        equipment: [
          { camera: 'Nikon Z6 II', lenses: ['Nikon 50mm f/1.8', 'Nikon 85mm f/1.8', 'Nikon 24-70mm f/2.8'] },
          { camera: 'Fujifilm X-T5', lenses: ['Fujifilm 35mm f/1.4', 'Fujifilm 56mm f/1.2'] }
        ],
        pricing: { hourly_rate: 1200, half_day_rate: 4000, full_day_rate: 7000 },
        availability: [
          { date: '2026-07-22', slots: ['09:00-12:00', '13:00-17:00'] },
          { date: '2026-07-23', slots: ['10:00-14:00'] }
        ],
        rating: 4.7, review_count: 32
      }
    ]);
    console.log('Created photographers');

    await Streamer.insertMany([{
      user_id: users[5]._id, display_name: 'GameMaster99',
      bio: 'สตรีมเมอร์สายเกมผีตัวพ่อ! เล่นเกมมา 115 ปี',
      platform: 'YouTube, TikTok',
      games: [{ name: 'Araya', hours_played: 3200 }, { name: 'Home Sweet Home', hours_played: 1500 }],
      packages: [
        { name: '1 ชั่วโมง', hours: 1, price: 500, description: 'เล่นเกมด้วยกัน 1 ชม.' },
        { name: '3 ชั่วโมง', hours: 3, price: 1200, description: 'เล่นเกมด้วยกัน 3 ชม. + แชทส่วนตัว 1 วัน' },
        { name: '5 ชั่วโมง', hours: 5, price: 1800, description: 'เล่นเกมด้วยกัน 5 ชม. + แชทส่วนตัว 7 วัน' }
      ],
      availability: [{ day: 'จันทร์-พฤหัส', time: '00:01-24:00 น.' }],
      rating: 4.7, review_count: 37
    }]);
    console.log('Created streamers');

    await Lens.insertMany([
      {
        owner_id: users[6]._id, lens_name: 'Jupiter-6 (Юпитер-6)',
        brand: 'KMZ (КМЗ)', model: 'Jupiter-6',         origin: 'USSR', condition: 'Excellent', category: 'Portrait Prime', mount: 'M42', focal_length: '135mm',
        aperture: { max: 'f/2.8', min: 'f/22' }, blades: 8, weight_g: 650,
        features: ['เลนส์รัสเซียระดับตำนาน', '10เบลด โบเก้กลมสวย', 'คมชัดที่ f/4-8'],
        accessories_included: ['ฝาหน้า-หลัง', 'กระเป๋าเลนส์หนังแท้', 'Hood โลหะ'],
        price_per_day: 500, deposit: 8000,
        image_urls: {
          front: 'Lens/Jupiter-6_0001.jpg',
          back: 'Lens/Jupiter-6_0002.webp',
          sample_photos: [
            'Lens/Jupiter-6_0003.webp',
            'Lens/Jupiter-6_0004.webp'
          ]
        }
      },
      {
        owner_id: users[7]._id, lens_name: 'Tair-3s (Таир-3с)',
        brand: 'KMZ (КМЗ)', model: 'Tair-3s',         origin: 'USSR', condition: 'Good - รอยใช้งานเล็กน้อย', category: 'Telephoto Prime', mount: 'M42', focal_length: '300mm',
        aperture: { max: 'f/4.5', min: 'f/22' }, blades: 8, weight_g: 980,
        features: ['เลนส์เทเลถ่ายระยะไกล', 'ถ่ายนก และคอนเสิร์ต', 'โบเก้เนียนสวย'],
        accessories_included: ['ฝาหน้า-หลัง', 'ขาตั้ง Tripod Collar', 'กระเป๋า Lens Case'],
        price_per_day: 700, deposit: 12000,
        image_urls: {
          front: 'Lens/Tair-3s_0001.webp',
          back: 'Lens/Tair-3s_0002.webp',
          sample_photos: [
            'Lens/Tair-3s_0003.webp',
            'Lens/Tair-3s_0004.webp',
            'Lens/Tair-3s_0005.webp'
          ]
        }
      }
    ]);
    console.log('Created lenses');

    console.log('\n✅ Seed complete!');
    console.log('Login: albert@example.com / 1234 (or any email with password 1234)');
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
};

seed();
