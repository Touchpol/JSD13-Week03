import { v2 as cloudinary } from 'cloudinary';
import { readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

cloudinary.config({
  cloud_name: 'wcbjuu3d',
  api_key: '615381793661692',
  api_secret: 'gQftOyQipx_OXBenD5pOXNo9aXk',
});

const lensDir = join(__dirname, 'Lens');
const files = readdirSync(lensDir);

for (const file of files) {
  const filePath = join(lensDir, file);
  const publicId = `Lens/${file.replace(/\.[^.]+$/, '')}`;
  console.log(`Uploading ${file}...`);
  const result = await cloudinary.uploader.upload(filePath, {
    public_id: publicId,
    overwrite: true,
  });
  console.log(`  ✅ ${result.secure_url}`);
}

console.log('\nDone!');
