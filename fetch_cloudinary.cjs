const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync('cloudinary_collection_res.json', 'utf8'));

console.log('Collection Name:', data.collection_name);
console.log('Total Assets:', data.assets ? data.assets.length : 0);

const imageUrls = [];

if (data.assets) {
  data.assets.forEach((item, index) => {
    // Cloudinary resource secure URL format
    const publicId = item.public_id || item.publicId;
    const version = item.version ? `v${item.version}` : 'v1';
    const format = item.format || 'jpg';
    const cloudName = 'ddnogygp';

    // Cloudinary delivery URL
    const url = item.secure_url || item.url || `https://res.cloudinary.com/${cloudName}/image/upload/${version}/${publicId}.${format}`;
    
    console.log(`[${index + 1}] ${publicId} => ${url}`);
    imageUrls.push({
      publicId,
      url,
      display_name: item.display_name || item.filename || `Tezla Completed Home ${index + 1}`,
      width: item.width,
      height: item.height
    });
  });
}

fs.writeFileSync('cloudinary_images.json', JSON.stringify(imageUrls, null, 2));

// Download images locally into public/assets/images/completed_cloudinary/
const outDir = path.join(__dirname, 'public', 'assets', 'images', 'completed_cloudinary');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function downloadImages() {
  for (let i = 0; i < imageUrls.length; i++) {
    const item = imageUrls[i];
    const dest = path.join(outDir, `tezla_home_${i + 1}.jpg`);
    console.log(`Downloading image ${i + 1}/${imageUrls.length} from ${item.url}...`);
    try {
      const res = await fetch(item.url);
      const buffer = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buffer);
      console.log(`Saved ${dest}`);
    } catch(err) {
      console.error(`Failed ${item.url}:`, err.message);
    }
  }
}

downloadImages();
