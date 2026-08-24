# DRIFTEX™ — Full-Stack MERN Website & Cloud Catalog

Manufacturer & Wholesaler of Premium Jeans Clothing in Mumbai.
**STAY DRIFTING.**

---

## 📁 Project Directory Structure

```
driftx/
├── client/                     # React + Vite Frontend
│   ├── public/                 # Authentic High-Res Denim Assets
│   ├── src/
│   │   ├── components/         # AdminPortal, WhatsAppButton, Modals
│   │   ├── App.jsx             # Main Application
│   │   ├── main.jsx            # React Entry Point
│   │   └── index.css           # Global Styles & Typography
│   ├── index.html              # HTML with Google Fonts
│   ├── vite.config.js          # Vite Config with /api Proxy
│   └── package.json            # Client Scripts & Dependencies
│
├── server/                     # Express.js + MongoDB Atlas Backend
│   ├── models/
│   │   └── Product.js          # Mongoose Product Schema
│   ├── index.js                # REST API Server & DB Connection
│   └── package.json            # Server Scripts & Dependencies
│
├── .env                        # MongoDB Connection & Secret Passkey
└── package.json                # Root Workspace Commands
```

---

## 🚀 Quick Start Commands

### 1. Start Backend API Server
```bash
npm run server
```
*Runs Express on `http://localhost:5000` connected to MongoDB Atlas.*

### 2. Start Frontend Dev Server
```bash
npm run client
```
*Runs Vite on `http://localhost:5173`.*

### 3. Production Build
```bash
npm run build
```

---

## 🔐 Owner Admin Portal

- **How to Open**:
  - Click the subtle **Lock Icon `🔒`** in the footer navigation or mobile drawer.
  - Or press **`Shift + A`** on the keyboard.
- **Passkey**: `driftex2025` (configured in `.env`).
- **Features**:
  - Direct photo uploads with automatic compression.
  - Add, edit, or delete articles live in MongoDB Atlas.
  - Real-time synchronization across all visitors worldwide.
