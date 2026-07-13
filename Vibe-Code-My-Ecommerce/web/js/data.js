const data = {
  photographers: [
    {
      id: 'PH001',
      full_name: 'Spider Man',
      display_name: 'SPM Photography',
      bio: 'ช่างภาพมืออาชีพมากประสบการณ์ 20 ปี มีความชำนาญด้านการถ่ายภาพพอร์ตเทรต งานแต่งงาน และผลิตภัณฑ์',
      phone: '055-555-5555',
      line_id: '@spm_photo',
      location: 'กรุงเทพฯ',
      equipment: [
        { camera: 'Sony A7 IV', lenses: ['Sony 50mm f/1.2', 'Sony 85mm f/1.4', 'Sony 24-70mm f/2.8'] },
        { camera: 'Canon EOS R5', lenses: ['Canon 35mm f/1.4', 'Canon 70-200mm f/2.8'] }
      ],
      portfolio: [
        { url: 'portrait_01.jpg', caption: 'พอร์ตเทรตนางแบบ', category: 'พอร์ตเทรต' },
        { url: 'wedding_02.jpg', caption: 'งานแต่งคุณบุญ', category: 'งานแต่งงาน' },
        { url: 'product_03.jpg', caption: 'ถ่ายสินค้าเครื่องสำอาง', category: 'โปรดักต์' }
      ],
      pricing: { hourly_rate: 1000, half_day_rate: 3500, full_day_rate: 6000 },
      availability: [
        { date: '2026-07-19', slots: ['09:00-12:00', '13:00-16:00'] },
        { date: '2026-07-20', slots: ['10:00-13:00'] }
      ],
      rating: 4.9, review_count: 48
    },
    {
      id: 'PH002',
      full_name: 'Robin Banks',
      display_name: 'Robin Banks Photography',
      bio: 'ช่างภาพสายแฟชั่นและสตรีท ถนัดการถ่ายภาพแนว Editorial และ Lifestyle มีสไตล์เป็นเอกลักษณ์',
      phone: '066-666-6666',
      line_id: '@robinbanks',
      location: 'เชียงใหม่',
      equipment: [
        { camera: 'Nikon Z6 II', lenses: ['Nikon 50mm f/1.8', 'Nikon 85mm f/1.8', 'Nikon 24-70mm f/2.8'] },
        { camera: 'Fujifilm X-T5', lenses: ['Fujifilm 35mm f/1.4', 'Fujifilm 56mm f/1.2'] }
      ],
      portfolio: [
        { url: 'fashion_01.jpg', caption: 'แฟชั่นถนนย่านนิมมาน', category: 'แฟชั่น' },
        { url: 'editorial_02.jpg', caption: 'Editorial นิตยสาร VOGUE', category: 'Editorial' },
        { url: 'street_03.jpg', caption: 'สตรีทอาร์ต เชียงใหม่', category: 'สตรีท' }
      ],
      pricing: { hourly_rate: 1200, half_day_rate: 4000, full_day_rate: 7000 },
      availability: [
        { date: '2026-07-22', slots: ['09:00-12:00', '13:00-17:00'] },
        { date: '2026-07-23', slots: ['10:00-14:00'] }
      ],
      rating: 4.7, review_count: 32
    }
  ],

  streamers: [
    {
      id: 'ST001',
      display_name: 'GameMaster99',
      real_name: 'Donald Duck',
      bio: 'สตรีมเมอร์สายเกมผีตัวพ่อ! เล่นเกมมา 115 ปี พูดคุยสนุก ตลก ไม่เครียด',
      platforms: [
        { name: 'YouTube', url: '#', subscribers: 350000 },
        { name: 'TikTok', url: '#', followers: 500000 }
      ],
      games: [
        { name: 'Araya', hours_played: 3200 },
        { name: 'Home Sweet Home', hours_played: 1500 },
        { name: 'The House', hours_played: 800 }
      ],
      packages: [
        { name: '1 ชั่วโมง', hours: 1, price: 500, description: 'เล่นเกมด้วยกัน 1 ชม. ถ่ายรูปร่วมกัน' },
        { name: '3 ชั่วโมง', hours: 3, price: 1200, description: 'เล่นเกมด้วยกัน 3 ชม. + แชทส่วนตัว 1 วัน' },
        { name: '5 ชั่วโมง', hours: 5, price: 1800, description: 'เล่นเกมด้วยกัน 5 ชม. + แชทส่วนตัว 7 วัน' }
      ],
      availability: [
        { day: 'จันทร์-พฤหัส', time: '00:01-24:00 น.' },
        { day: 'ศุกร์-อาทิตย์', time: '18:00-02:00 น.' }
      ],
      rating: 4.7, review_count: 37
    }
  ],

  lenses: [
    {
      id: 'L001',
      owner_name: 'Oleg Retrov',
      lens_name: 'Jupiter-6 (Юпитер-6)',
      brand: 'KMZ (КМЗ)', model: 'Jupiter-6',
      origin: 'USSR (รัสเซีย)',

      condition: 'Excellent - สภาพเหมือนใหม่ ไม่มีรอยขีดข่วน เลนส์ใส',
      category: 'Portrait Prime',
      mount: 'M42', focal_length: '135mm',
      aperture: { max: 'f/2.8', min: 'f/22' },
      blades: 8, weight_g: 650,
      features: ['เลนส์รัสเซียระดับตำนาน', 'โบเก้สวย 10 เบลด', 'คมชัดที่ f/4-8'],
      accessories: ['ฝาหน้า-หลัง', 'กระเป๋าเลนส์หนังแท้', 'Hood โลหะ'],
      price_per_day: 500, deposit: 8000,
      image_urls: [
        'https://res.cloudinary.com/wcbjuu3d/image/upload/v1783933495/Lens/Jupiter-6_0001.jpg',
        'https://res.cloudinary.com/wcbjuu3d/image/upload/v1783933496/Lens/Jupiter-6_0002.webp',
        'https://res.cloudinary.com/wcbjuu3d/image/upload/v1783933497/Lens/Jupiter-6_0003.webp',
        'https://res.cloudinary.com/wcbjuu3d/image/upload/v1783933498/Lens/Jupiter-6_0004.webp'
      ]
    },
    {
      id: 'L002',
      owner_name: 'Alexei Suchkov',
      lens_name: 'Tair-3s (Таир-3с)',
      brand: 'KMZ (КМЗ)', model: 'Tair-3s',
      origin: 'USSR (รัสเซีย)',

      condition: 'Good - รอยใช้งานเล็กน้อย เลนส์ใสไร้รอยขีดข่วน',
      category: 'Telephoto Prime',
      mount: 'M42', focal_length: '300mm',
      aperture: { max: 'f/4.5', min: 'f/22' },
      blades: 8, weight_g: 980,
      features: ['เลนส์เทเลถ่ายระยะไกล', 'ถ่ายนก และคอนเสิร์ต', 'โบเก้เนียนสวย'],
      accessories: ['ฝาหน้า-หลัง', 'ขาตั้ง Tripod Collar', 'กระเป๋า Lens Case'],
      price_per_day: 700, deposit: 12000,
      image_urls: [
        'https://res.cloudinary.com/wcbjuu3d/image/upload/v1783933499/Lens/Tair-3s_0001.webp',
        'https://res.cloudinary.com/wcbjuu3d/image/upload/v1783933499/Lens/Tair-3s_0002.webp',
        'https://res.cloudinary.com/wcbjuu3d/image/upload/v1783933500/Lens/Tair-3s_0003.webp',
        'https://res.cloudinary.com/wcbjuu3d/image/upload/v1783933501/Lens/Tair-3s_0004.webp',
        'https://res.cloudinary.com/wcbjuu3d/image/upload/v1783933501/Lens/Tair-3s_0005.webp'
      ]
    },
    {
      id: 'L003',
      owner_name: 'Dmitri Volkov',
      lens_name: 'Telemar-22A (Телемар-22А)',
      brand: 'KMZ (КМЗ)', model: 'Telemar-22A',
      origin: 'USSR (รัสเซีย)',

      condition: 'Excellent - เลนส์ใสไร้รอยขีดข่วน ระยะซูมทำงานปกติ',
      category: 'Telephoto Prime',
      mount: 'M42', focal_length: '200mm',
      aperture: { max: 'f/3.5', min: 'f/22' },
      blades: 10, weight_g: 750,
      features: ['เลนส์เทเลพกพาสะดวก', 'โบเก้ 10 เบลด ละมุน', 'เหมาะสำหรับถ่ายภาพพอร์เทรตระยะไกล'],
      accessories: ['ฝาหน้า-หลัง', 'ฮูดกันแสง', 'กระเป๋าเลนส์'],
      price_per_day: 600, deposit: 10000,
      image_urls: [
        'https://res.cloudinary.com/wcbjuu3d/image/upload/v1783942786/Lens/Telemar-22A%20001.webp',
        'https://res.cloudinary.com/wcbjuu3d/image/upload/v1783942786/Lens/Telemar-22A%20002.webp',
        'https://res.cloudinary.com/wcbjuu3d/image/upload/v1783942787/Lens/Telemar-22A%20003.webp'
      ]
    },
    {
      id: 'L004',
      owner_name: 'Sergei Mikhailov',
      lens_name: 'MTO-500 (МТО-500)',
      brand: 'LZOS (ЛЗОС)', model: 'MTO-500',
      origin: 'USSR (รัสเซีย)',

      condition: 'Good - รอยใช้งานเล็กน้อย กระจกใส ไม่มีฝ้า',
      category: 'Super Telephoto Mirror',
      mount: 'M42', focal_length: '500mm',
      aperture: { max: 'f/8', min: 'f/8' },
      blades: 0, weight_g: 1200,
      features: ['เลนส์ Mirror กระจกสะท้อนแสง', 'ทางยาวโฟกัส 500mm คงที่', 'กะทัดรัดกว่าเลนส์เทเลทั่วไป', 'เอกลักษณ์โบเก้รูปโดนัท'],
      accessories: ['ฝาหน้า-หลัง', 'ตัวกรอง ND ในตัว', 'ขาตั้ง Tripod Collar', 'กระเป๋า Lens Case'],
      price_per_day: 800, deposit: 15000,
      image_urls: [
        'https://res.cloudinary.com/wcbjuu3d/image/upload/v1783942778/Lens/MTO-500%20001.webp',
        'https://res.cloudinary.com/wcbjuu3d/image/upload/v1783942779/Lens/MTO-500%20002.webp',
        'https://res.cloudinary.com/wcbjuu3d/image/upload/v1783942779/Lens/MTO-500%20003.webp',
        'https://res.cloudinary.com/wcbjuu3d/image/upload/v1783942780/Lens/MTO-500%20004.webp',
        'https://res.cloudinary.com/wcbjuu3d/image/upload/v1783942781/Lens/MTO-500%20005.webp'
      ]
    },
    {
      id: 'L005',
      owner_name: 'Ivan Kuznetsov',
      lens_name: 'MTO-1000 (МТО-1000)',
      brand: 'LZOS (ЛЗОС)', model: 'MTO-1000',
      origin: 'USSR (รัสเซีย)',

      condition: 'Good - รอยใช้งานเล็กน้อย กระจกใส ไม่มีรอยขีดข่วน',
      category: 'Super Telephoto Mirror',
      mount: 'M42', focal_length: '1000mm',
      aperture: { max: 'f/10', min: 'f/10' },
      blades: 0, weight_g: 2500,
      features: ['เลนส์ Mirror ทางยาวโฟกัส 1000mm', 'ซูเปอร์เทเล ถ่ายพระจันทร์และนก', 'โบเก้รูปโดนัทเอกลักษณ์เฉพาะตัว'],
      accessories: ['ฝาหน้า-หลัง', 'ตัวกรอง ND ในตัว', 'ขาตั้ง Tripod Collar แข็งแรง', 'กระเป๋า Lens Case ขนาดใหญ่'],
      price_per_day: 1000, deposit: 20000,
      image_urls: [
        'https://res.cloudinary.com/wcbjuu3d/image/upload/v1783942772/Lens/MTO-1000%20001.webp',
        'https://res.cloudinary.com/wcbjuu3d/image/upload/v1783942773/Lens/MTO-1000%20003.webp',
        'https://res.cloudinary.com/wcbjuu3d/image/upload/v1783942775/Lens/MTO-1000%20004.webp',
        'https://res.cloudinary.com/wcbjuu3d/image/upload/v1783942776/Lens/MTO-1000%20005.webp',
        'https://res.cloudinary.com/wcbjuu3d/image/upload/v1783942777/Lens/MTO-1000%20006.webp'
      ]
    }
  ],

  bookings: [
    {
      id: 'B001', type: 'lens_rental',
      user: 'chris@example.com',
      lens_name: 'Jupiter-6 (Юпитер-6)',
      start_date: '2026-07-20', end_date: '2026-07-22',
      total: 1600, status: 'pending'
    },
    {
      id: 'B002', type: 'photographer_booking',
      user: 'albert@example.com',
      photographer: 'SPM Photography',
      booking_date: '2026-07-20', duration: 3,
      total: 3000, status: 'confirmed'
    },
    {
      id: 'B003', type: 'streamer_booking',
      user: 'bbq@example.com',
      streamer: 'GameMaster99',
      package_name: '3 ชั่วโมง',
      booking_date: '2026-07-25',
      total: 1200, status: 'pending'
    }
  ]
};
