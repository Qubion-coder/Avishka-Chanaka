const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const p = path.join('public', 'ChatGPT Image Sep 24, 2026, 02_54_53 PM.png');
sharp(p)
  .resize(1200) // Resize width to 1200 (ideal for OG), height scales automatically (no crop)
  .jpeg({ quality: 75 })
  .toFile(path.join('public', 'og-image.jpg'))
  .then(info => console.log('Successfully optimized:', info))
  .catch(err => console.error('Error optimizing:', err));
