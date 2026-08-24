import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Product from './models/Product.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Initial Default Products Seeder
const DEFAULT_PRODUCTS = [
  {
    name: "Indigo Baggy",
    tag: "Bestseller",
    img: "/images/WhatsApp Image 2026-08-23 at 1.55.49 PM.jpeg",
    detailImg: "/images/WhatsApp Image 2026-08-23 at 1.55.50 PM (1).jpeg",
    desc: "A relaxed, wide-through-the-thigh silhouette in a rich mid-indigo wash. Built with a structured waistband and signature gold hardware — comfort that never compromises on edge.",
  },
  {
    name: "Ice Wash Wide",
    tag: "New",
    img: "/images/WhatsApp Image 2026-08-23 at 1.55.49 PM (1).jpeg",
    detailImg: "/images/WhatsApp Image 2026-08-23 at 1.55.51 PM (1).jpeg",
    desc: "Bleached to an almost-white fade, this wide-leg cut brings an effortless, sun-worn feel. Lightweight yet durable — the pair that works from street to summer.",
  },
  {
    name: "Carbon Black",
    tag: "Signature",
    img: "/images/WhatsApp Image 2026-08-23 at 1.55.49 PM (2).jpeg",
    detailImg: "/images/WhatsApp Image 2026-08-23 at 1.55.50 PM (2).jpeg",
    desc: "Deep charcoal denim with a subtle ash fade — structured wide leg, clean silhouette. The darkest cut in the range, made for those who prefer their denim after midnight.",
  },
  {
    name: "Light Wash Straight",
    tag: "Classic",
    img: "/images/WhatsApp Image 2026-08-23 at 1.55.50 PM.jpeg",
    detailImg: "/images/WhatsApp Image 2026-08-23 at 1.55.50 PM (2).jpeg",
    desc: "Clean light-blue wash with an easy straight fit from hip to hem. The everyday essential — no distressing, no gimmicks, just premium denim done right.",
  },
  {
    name: "Medium Blue Wide",
    tag: "Heritage",
    img: "/images/WhatsApp Image 2026-08-23 at 1.55.51 PM (2).jpeg",
    detailImg: "/images/WhatsApp Image 2026-08-23 at 1.55.50 PM (1).jpeg",
    desc: "A balanced medium wash in a relaxed wide-leg cut. Versatile indigo tones with natural whisker fading — the kind of jeans that look better with every wear.",
  },
];

async function seedDefaultProductsIfEmpty() {
  try {
    const count = await Product.countDocuments();
    if (count === 0) {
      console.log('📦 Database is empty. Seeding initial DRIFTEX product collection...');
      await Product.insertMany(DEFAULT_PRODUCTS);
      console.log('✅ Default products seeded successfully.');
    }
  } catch (err) {
    console.error('Error seeding default products:', err);
  }
}

// Routes
// 1. Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString(), database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' });
});

// 2. GET all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// 3. POST new product
app.post('/api/products', async (req, res) => {
  try {
    const { name, tag, desc, img, detailImg, sizes } = req.body;
    if (!name || !img) {
      return res.status(400).json({ error: 'Name and image are required' });
    }

    const newProduct = new Product({
      name,
      tag: tag || 'New',
      desc: desc || '',
      img,
      detailImg: detailImg || img,
      sizes: sizes || ['28', '30', '32', '34', '36', '38'],
    });

    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error('Error saving product:', error);
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// 4. PUT update product
app.put('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, tag, desc, img, detailImg, sizes } = req.body;

    const updated = await Product.findByIdAndUpdate(
      id,
      { name, tag, desc, img, detailImg, sizes },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(updated);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// 5. DELETE product
app.delete('/api/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully', id });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

// 6. POST reset / re-seed products
app.post('/api/products/reset', async (req, res) => {
  try {
    await Product.deleteMany({});
    const seeded = await Product.insertMany(DEFAULT_PRODUCTS);
    res.json({ message: 'Catalog reset to defaults', products: seeded });
  } catch (error) {
    console.error('Error resetting products:', error);
    res.status(500).json({ error: 'Failed to reset catalog' });
  }
});

// Database connection & Server Startup
async function startServer() {
  try {
    if (!MONGODB_URI) {
      console.warn('⚠️ MONGODB_URI is not set in .env. Server will run without database connectivity.');
    } else {
      console.log('Connecting to MongoDB Atlas...');
      await mongoose.connect(MONGODB_URI);
      console.log('🟢 Connected to MongoDB Atlas successfully!');
      await seedDefaultProductsIfEmpty();
    }

    app.listen(PORT, () => {
      console.log(`🚀 DRIFTEX Backend API running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('🔴 MongoDB connection error:', err);
  }
}

startServer();
