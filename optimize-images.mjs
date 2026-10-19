/**
 * Image Optimization Script
 * Compresses all PNG/JPG images in the /public folder
 * PNGs -> WebP (quality 80), JPGs -> compressed JPG (quality 85)
 */

import sharp from 'sharp';
import { readdir, stat, rename } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, 'public');

const files = await readdir(publicDir);

let totalOriginal = 0;
let totalCompressed = 0;

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

  // Skip already small files (< 50KB)
  const filePath = join(publicDir, file);
  const { size } = await stat(filePath);
  
  console.log(`Processing: ${file} (${(size / 1024).toFixed(0)} KB)`);
  totalOriginal += size;

  const name = basename(file, ext);
  const outputPath = join(publicDir, `${name}.webp`);

  try {
    await sharp(filePath)
      .webp({ quality: 82, effort: 4 })
      .toFile(outputPath);

    const { size: newSize } = await stat(outputPath);
    totalCompressed += newSize;

    const savings = (((size - newSize) / size) * 100).toFixed(1);
    console.log(`  ✅ ${file} -> ${name}.webp (${(newSize / 1024).toFixed(0)} KB, saved ${savings}%)`);
  } catch (err) {
    console.error(`  ❌ Failed: ${file}`, err.message);
  }
}

const totalSavings = (((totalOriginal - totalCompressed) / totalOriginal) * 100).toFixed(1);
console.log('\n--- Summary ---');
console.log(`Original:   ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
console.log(`Compressed: ${(totalCompressed / 1024 / 1024).toFixed(2)} MB`);
console.log(`Total savings: ${totalSavings}%`);
