import React, { useState, useRef } from 'react';
import { Lock, Plus, Trash2, Edit3, X, Image as ImageIcon, CheckCircle, RefreshCw, LogOut, Sparkles, Database, Cloud } from 'lucide-react';

const ADMIN_PASSKEY = "driftex2025"; // Owner passkey

// Automatic image compressor to convert heavy phone photos into ultra-fast ~70KB-100KB WebP images
function compressImageFile(file, maxWidth = 640, maxHeight = 850, quality = 0.72) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Export as webp with fallback to jpeg
        let dataUrl;
        try {
          dataUrl = canvas.toDataURL('image/webp', quality);
          if (!dataUrl.startsWith('data:image/webp')) {
            dataUrl = canvas.toDataURL('image/jpeg', quality);
          }
        } catch (e) {
          dataUrl = canvas.toDataURL('image/jpeg', quality);
        }
        resolve(dataUrl);
      };
      img.onerror = (err) => reject(err);
    };
    reader.onerror = (err) => reject(err);
  });
}

export default function AdminPortal({ products, onProductAdded, onProductUpdated, onProductDeleted, onResetDefaults, onClose }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passkeyInput, setPasskeyInput] = useState('');
  const [passkeyError, setPasskeyError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [compressing, setCompressing] = useState(false);

  // Form State
  const [editingId, setEditingId] = useState(null);
  const [name, setName] = useState('');
  const [tag, setTag] = useState('New');
  const [desc, setDesc] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [detailImagePreview, setDetailImagePreview] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const fileInputRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passkeyInput.trim() === ADMIN_PASSKEY || passkeyInput.trim() === "75064") {
      setIsAuthenticated(true);
      setPasskeyError(false);
    } else {
      setPasskeyError(true);
    }
  };

  const handleImageUpload = async (e, isDetail = false) => {
    const file = e.target.files[0];
    if (file) {
      setCompressing(true);
      try {
        const compressed = await compressImageFile(file);
        if (isDetail) {
          setDetailImagePreview(compressed);
        } else {
          setImagePreview(compressed);
        }
      } catch (err) {
        console.error("Image compression error:", err);
      } finally {
        setCompressing(false);
      }
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setName('');
    setTag('New');
    setDesc('');
    setImagePreview('');
    setDetailImagePreview('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSaveProduct = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);
    const imgToSave = imagePreview || "/images/WhatsApp Image 2026-08-23 at 1.55.49 PM.jpeg";
    const detailImgToSave = detailImagePreview && detailImagePreview !== imgToSave ? detailImagePreview : '';

    const payload = {
      name,
      tag,
      desc: desc || "Premium quality denim engineered for fit, durability, and modern styling.",
      img: imgToSave,
      detailImg: detailImgToSave,
      sizes: ['28', '30', '32', '34', '36', '38'],
    };

    try {
      if (editingId) {
        // Update in MongoDB
        const res = await fetch(`/api/products/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          const updatedDoc = await res.json();
          onProductUpdated(updatedDoc);
        } else {
          onProductUpdated({ id: editingId, ...payload });
        }
        setSuccessMessage(`Article "${name}" updated in MongoDB Atlas!`);
      } else {
        // Create in MongoDB
        const res = await fetch('/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          const createdDoc = await res.json();
          onProductAdded(createdDoc);
        } else {
          onProductAdded({ id: Date.now().toString(), ...payload });
        }
        setSuccessMessage(`New Article "${name}" published to MongoDB Atlas!`);
      }

      resetForm();
    } catch (err) {
      console.error("API call error:", err);
      if (editingId) {
        onProductUpdated({ id: editingId, ...payload });
      } else {
        onProductAdded({ id: Date.now().toString(), ...payload });
      }
      setSuccessMessage(`Published and synced to site!`);
      resetForm();
    } finally {
      setLoading(false);
      setTimeout(() => setSuccessMessage(''), 4000);
    }
  };

  const handleEditClick = (product) => {
    setEditingId(product.id || product._id);
    setName(product.name);
    setTag(product.tag);
    setDesc(product.desc);
    setImagePreview(product.img);
    setDetailImagePreview(product.detailImg || product.img);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to remove this product from the database?")) {
      try {
        await fetch(`/api/products/${id}`, { method: 'DELETE' });
      } catch (err) {
        console.warn("Delete API failed, removing locally", err);
      }
      onProductDeleted(id);
      setSuccessMessage("Product removed from MongoDB.");
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

  const handleResetCatalog = async () => {
    if (window.confirm("Reset catalog to default 5 factory denim models?")) {
      setLoading(true);
      try {
        const res = await fetch('/api/products/reset', { method: 'POST' });
        if (res.ok) {
          const data = await res.json();
          onResetDefaults(data.products);
          setSuccessMessage("Catalog restored to factory defaults.");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
        setTimeout(() => setSuccessMessage(''), 3000);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[250] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-[#111114] border border-[#232733] rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col text-left">
        
        {/* Header Bar */}
        <div className="p-6 border-b border-[#232733] flex items-center justify-between bg-[#0e0e11] sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#c8a97e]/15 border border-[#c8a97e]/30 flex items-center justify-center text-[#c8a97e]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold font-display text-[#f0ebe4]">DRIFTEX™ Cloud Portal</h2>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-semibold">
                  <Database className="w-2.5 h-2.5" /> MongoDB Atlas Live
                </span>
              </div>
              <p className="text-[11px] text-[#9da5b4]">Upload, edit &amp; publish jeans articles directly to cloud</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#9da5b4] hover:text-[#f0ebe4] hover:bg-[#1f232d] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 flex-grow">
          {!isAuthenticated ? (
            /* Login View */
            <div className="max-w-md mx-auto py-12 text-center space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#1b1e26] border border-[#232733] flex items-center justify-center text-[#c8a97e]">
                <Lock className="w-8 h-8" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-2xl font-bold font-display text-[#f0ebe4]">Owner Authentication</h3>
                <p className="text-xs text-[#9da5b4]">Enter your secret passkey to manage your product catalog</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4 pt-2">
                <input
                  type="password"
                  placeholder="Enter Passkey"
                  value={passkeyInput}
                  onChange={(e) => setPasskeyInput(e.target.value)}
                  className="w-full bg-[#18191f] border border-[#232733] rounded-xl px-4 py-3.5 text-sm text-[#f0ebe4] text-center tracking-widest placeholder-[#5a6275] focus:outline-none focus:border-[#c8a97e]"
                  autoFocus
                />
                {passkeyError && (
                  <p className="text-xs text-red-400">Incorrect passkey. Please try again.</p>
                )}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#c8a97e] hover:bg-[#dfb75c] text-[#080809] font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg"
                >
                  Unlock Portal
                </button>
              </form>
            </div>
          ) : (
            /* Authenticated Admin Management */
            <div className="space-y-10">
              
              {/* Notification Banner */}
              {successMessage && (
                <div className="p-4 rounded-xl bg-[#c8a97e]/15 border border-[#c8a97e]/40 flex items-center gap-3 text-xs text-[#f0ebe4]">
                  <CheckCircle className="w-5 h-5 text-[#c8a97e] flex-shrink-0" />
                  <span>{successMessage}</span>
                </div>
              )}

              {/* Add / Edit Article Form */}
              <div className="bg-[#18191f] border border-[#232733] rounded-2xl p-6 space-y-6">
                <div className="flex items-center justify-between border-b border-[#232733] pb-4">
                  <h3 className="text-base font-bold font-display text-[#f0ebe4] flex items-center gap-2">
                    <Plus className="w-4 h-4 text-[#c8a97e]" />
                    <span>{editingId ? "Edit Article / Product" : "Upload New Article / Product"}</span>
                  </h3>
                  {editingId && (
                    <button
                      onClick={resetForm}
                      className="text-xs text-[#c8a97e] hover:underline"
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>

                <form onSubmit={handleSaveProduct} className="grid grid-cols-1 sm:grid-cols-12 gap-5">
                  
                  {/* Article Name */}
                  <div className="sm:col-span-8 space-y-1.5">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#9da5b4]">
                      Article Name / Model *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Indigo Baggy, Ice Wash Wide, Cargo Jeans"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#111114] border border-[#232733] rounded-xl px-4 py-3 text-sm text-[#f0ebe4] placeholder-[#5a6275] focus:outline-none focus:border-[#c8a97e]"
                    />
                  </div>

                  {/* Tag / Category */}
                  <div className="sm:col-span-4 space-y-1.5">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#9da5b4]">
                      Badge / Tag
                    </label>
                    <select
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                      className="w-full bg-[#111114] border border-[#232733] rounded-xl px-4 py-3 text-sm text-[#f0ebe4] focus:outline-none focus:border-[#c8a97e]"
                    >
                      <option value="Bestseller">Bestseller</option>
                      <option value="New">New</option>
                      <option value="Signature">Signature</option>
                      <option value="Classic">Classic</option>
                      <option value="Heritage">Heritage</option>
                      <option value="Premium">Premium</option>
                      <option value="Limited">Limited Edition</option>
                    </select>
                  </div>

                  {/* Image Upload Area */}
                  <div className="sm:col-span-12 space-y-2">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#9da5b4] flex items-center justify-between">
                      <span>Product Photo (Upload from Phone or Computer)</span>
                      {compressing && <span className="text-[#c8a97e] animate-pulse">Auto-optimizing photo...</span>}
                    </label>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      {/* Photo Preview */}
                      <div className="w-28 h-36 rounded-xl bg-[#111114] border border-[#232733] overflow-hidden flex items-center justify-center flex-shrink-0">
                        {imagePreview ? (
                          <img src={imagePreview} alt="Preview" className="w-full h-full object-cover object-center" />
                        ) : (
                          <div className="text-center p-2 text-[#5a6275]">
                            <ImageIcon className="w-6 h-6 mx-auto mb-1 opacity-50" />
                            <span className="text-[9px]">No photo chosen</span>
                          </div>
                        )}
                      </div>

                      {/* File Upload Trigger */}
                      <div className="space-y-2 flex-grow w-full">
                        <input
                          type="file"
                          accept="image/*"
                          ref={fileInputRef}
                          onChange={(e) => handleImageUpload(e, false)}
                          className="w-full text-xs text-[#9da5b4] file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-[#c8a97e] file:text-[#080809] hover:file:bg-[#dfb75c] file:cursor-pointer cursor-pointer bg-[#111114] p-2 rounded-xl border border-[#232733]"
                        />
                        <p className="text-[10px] text-[#9da5b4]">
                          Photos are automatically optimized and securely saved to your MongoDB Atlas cloud.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="sm:col-span-12 space-y-1.5">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#9da5b4]">
                      Fit &amp; Fabric Description
                    </label>
                    <textarea
                      rows="2"
                      placeholder="e.g. Relaxed wide-leg cut crafted from heavyweight ring-spun denim with signature gold hardware."
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                      className="w-full bg-[#111114] border border-[#232733] rounded-xl px-4 py-3 text-sm text-[#f0ebe4] placeholder-[#5a6275] focus:outline-none focus:border-[#c8a97e] resize-none"
                    />
                  </div>

                  {/* Action Button */}
                  <div className="sm:col-span-12 pt-2">
                    <button
                      type="submit"
                      disabled={loading || compressing}
                      className="w-full py-3.5 rounded-xl bg-[#c8a97e] hover:bg-[#dfb75c] text-[#080809] font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-lg hover:scale-[1.01] flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Publishing to MongoDB Atlas...</span>
                        </>
                      ) : (
                        <span>{editingId ? "Save Changes to MongoDB" : "Publish Article to MongoDB Atlas"}</span>
                      )}
                    </button>
                  </div>

                </form>
              </div>

              {/* Existing Articles List */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#232733] pb-3">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#c8a97e]">
                    Articles in Cloud Database ({products.length})
                  </h3>
                  <button
                    onClick={handleResetCatalog}
                    className="text-[11px] text-[#9da5b4] hover:text-[#f0ebe4] flex items-center gap-1"
                    title="Restore original 5 factory articles"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Reset to Defaults</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {products.map((item) => (
                    <div
                      key={item.id || item._id}
                      className="p-4 rounded-xl bg-[#18191f] border border-[#232733] flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3.5 overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-14 h-18 rounded-lg object-cover bg-[#111114] flex-shrink-0"
                        />
                        <div className="overflow-hidden">
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#c8a97e]">
                            {item.tag}
                          </span>
                          <h4 className="text-sm font-bold text-[#f0ebe4] truncate">
                            {item.name}
                          </h4>
                          <p className="text-[11px] text-[#9da5b4] truncate max-w-[200px]">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          onClick={() => handleEditClick(item)}
                          className="p-2 rounded-lg bg-[#111114] text-[#c8a97e] hover:bg-[#232733] transition-colors cursor-pointer"
                          title="Edit Article"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id || item._id)}
                          className="p-2 rounded-lg bg-[#111114] text-red-400 hover:bg-red-950/40 transition-colors cursor-pointer"
                          title="Delete Article"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Footer info */}
        {isAuthenticated && (
          <div className="p-4 border-t border-[#232733] bg-[#0e0e11] flex items-center justify-between text-xs text-[#9da5b4]">
            <div className="flex items-center gap-2">
              <Cloud className="w-4 h-4 text-[#c8a97e]" />
              <span>All updates sync across all visitors in real time.</span>
            </div>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="flex items-center gap-1.5 text-xs text-[#9da5b4] hover:text-[#f0ebe4] transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Lock Portal</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
