import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import Product from './models/Product.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const MONGODB_URI = process.env.MONGODB_URI;

async function optimizeBase64(base64Str, maxWidth = 560, maxHeight = 760, quality = 68) {
  if (!base64Str || !base64Str.startsWith('data:image')) {
    return base64Str;
  }

  try {
    const parts = base64Str.split(';base64,');
    if (parts.length !== 2) return base64Str;

    const buffer = Buffer.from(parts[1], 'base64');
    
    // Resize and compress with sharp to WebP (perfect for retina card displays)
    const compressedBuffer = await sharp(buffer)
      .resize({
        width: maxWidth,
        height: maxHeight,
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality })
      .toBuffer();

    return `data:image/webp;base64,${compressedBuffer.toString('base64')}`;
  } catch (err) {
    console.error('Compression error:', err.message);
    return base64Str;
  }
}

async function runOptimization() {
  try {
    console.log('Connecting to MongoDB Atlas...');
    await mongoose.connect(MONGODB_URI);
    console.log('🟢 Connected!');

    const products = await Product.find({});
    console.log(`Found ${products.length} products to check.`);

    let totalOldBytes = 0;
    let totalNewBytes = 0;

    for (const product of products) {
      const oldImgBytes = (product.img || '').length;
      const oldDetailBytes = (product.detailImg || '').length;
      totalOldBytes += oldImgBytes + oldDetailBytes;

      if (product.img && product.img.startsWith('data:image')) {
        product.img = await optimizeBase64(product.img, 560, 760, 68);
      }

      // If detailImg is identical to img or empty, don't duplicate base64 string
      if (!product.detailImg || product.detailImg === product.img) {
        product.detailImg = '';
      } else if (product.detailImg.startsWith('data:image')) {
        product.detailImg = await optimizeBase64(product.detailImg, 560, 760, 68);
      }

      const newImgBytes = (product.img || '').length;
      const newDetailBytes = (product.detailImg || '').length;
      totalNewBytes += newImgBytes + newDetailBytes;

      await product.save();
    }

    console.log('\n=======================================');
    console.log(`✅ All products optimized!`);
    console.log(`Initial total size: ${(totalOldBytes / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`Optimized total size: ${(totalNewBytes / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`Bandwidth reduction: ${Math.round((1 - totalNewBytes / totalOldBytes) * 100)}% smaller!`);
    console.log('=======================================');

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('Fatal error:', err);
    process.exit(1);
  }
}

runOptimization();
