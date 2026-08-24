import React, { useState, useEffect, useRef } from "react";
import WhatsAppButton from "./components/WhatsAppButton";
import AdminPortal from "./components/AdminPortal";

// Authentic Local Image Assets
const imgIndigoBaggy = "/images/WhatsApp Image 2026-08-23 at 1.55.49 PM.jpeg";
const imgIceWash = "/images/WhatsApp Image 2026-08-23 at 1.55.49 PM (1).jpeg";
const imgCarbonBlack = "/images/WhatsApp Image 2026-08-23 at 1.55.49 PM (2).jpeg";
const imgLightWash = "/images/WhatsApp Image 2026-08-23 at 1.55.50 PM.jpeg";
const imgWaistDetail = "/images/WhatsApp Image 2026-08-23 at 1.55.50 PM (1).jpeg";
const imgFolded = "/images/WhatsApp Image 2026-08-23 at 1.55.50 PM (2).jpeg";
const imgDetailAngle = "/images/WhatsApp Image 2026-08-23 at 1.55.51 PM (1).jpeg";
const imgMediumBlue = "/images/WhatsApp Image 2026-08-23 at 1.55.51 PM (2).jpeg";

const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Indigo Baggy",
    tag: "Bestseller",
    img: imgIndigoBaggy,
    detailImg: imgWaistDetail,
    desc: "A relaxed, wide-through-the-thigh silhouette in a rich mid-indigo wash. Built with a structured waistband and signature gold hardware — comfort that never compromises on edge.",
  },
  {
    id: 2,
    name: "Ice Wash Wide",
    tag: "New",
    img: imgIceWash,
    detailImg: imgDetailAngle,
    desc: "Bleached to an almost-white fade, this wide-leg cut brings an effortless, sun-worn feel. Lightweight yet durable — the pair that works from street to summer.",
  },
  {
    id: 3,
    name: "Carbon Black",
    tag: "Signature",
    img: imgCarbonBlack,
    detailImg: imgFolded,
    desc: "Deep charcoal denim with a subtle ash fade — structured wide leg, clean silhouette. The darkest cut in the range, made for those who prefer their denim after midnight.",
  },
  {
    id: 4,
    name: "Light Wash Straight",
    tag: "Classic",
    img: imgLightWash,
    detailImg: imgFolded,
    desc: "Clean light-blue wash with an easy straight fit from hip to hem. The everyday essential — no distressing, no gimmicks, just premium denim done right.",
  },
  {
    id: 5,
    name: "Medium Blue Wide",
    tag: "Heritage",
    img: imgMediumBlue,
    detailImg: imgWaistDetail,
    desc: "A balanced medium wash in a relaxed wide-leg cut. Versatile indigo tones with natural whisker fading — the kind of jeans that look better with every wear.",
  },
];

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function FadeIn({ children, delay = 0, className = "" }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(26px)",
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function ProductModal({ product, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const waEnquiryUrl = `https://wa.me/917506408708?text=${encodeURIComponent(`Hi DRIFTEX, I'm interested in ${product.name} (${product.tag} edition).`)}`;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "rgba(8,8,9,0.88)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        animation: "fadeInModal 0.3s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#111114",
          border: "1px solid rgba(240,235,228,0.1)",
          maxWidth: "820px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          overflow: "hidden",
          animation: "slideUpModal 0.35s ease",
          maxHeight: "90vh",
        }}
        className="modal-grid"
      >
        {/* Image */}
        <div style={{ position: "relative", overflow: "hidden", background: "#1a1a1e", minHeight: "380px" }}>
          <img
            src={product.img}
            alt={product.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />
          <div style={{
            position: "absolute",
            top: "1.25rem",
            left: "1.25rem",
            fontSize: "0.58rem",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#080809",
            background: "#c8a97e",
            padding: "0.3rem 0.65rem",
          }}>
            {product.tag}
          </div>
        </div>

        {/* Info */}
        <div style={{
          padding: "3rem 2.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1.5rem",
        }}>
          <div>
            <p style={{
              fontSize: "0.58rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#c8a97e",
              marginBottom: "0.75rem",
            }}>
              Driftex™ Collection
            </p>
            <h2 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "2.25rem",
              fontWeight: 700,
              lineHeight: 1,
              color: "#f0ebe4",
            }}>
              {product.name}
            </h2>
          </div>

          <div style={{
            width: "32px",
            height: "1px",
            background: "#c8a97e",
          }} />

          <p style={{
            fontSize: "0.88rem",
            lineHeight: 1.8,
            color: "rgba(240,235,228,0.6)",
            fontWeight: 300,
          }}>
            {product.desc}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {["Premium Quality Denim", "Gold-tone Hardware", "Available in All Sizes (28 - 38)"].map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.75rem", color: "rgba(240,235,228,0.45)", fontWeight: 300 }}>
                <div style={{ width: "3px", height: "3px", background: "#c8a97e", flexShrink: 0, borderRadius: "50%" }} />
                {f}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "1rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
            <a
              href={waEnquiryUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#080809",
                background: "#f0ebe4",
                padding: "0.875rem 1.75rem",
                textDecoration: "none",
                transition: "background 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#c8a97e")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#f0ebe4")}
            >
              Enquire on WhatsApp
            </a>
            <button
              onClick={onClose}
              style={{
                fontSize: "0.68rem",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(240,235,228,0.45)",
                background: "none",
                border: "1px solid rgba(240,235,228,0.15)",
                padding: "0.875rem 1.25rem",
                cursor: "pointer",
                transition: "color 0.2s, border-color 0.2s",
                fontFamily: "'Outfit', sans-serif",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#f0ebe4"; e.currentTarget.style.borderColor = "rgba(240,235,228,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(240,235,228,0.45)"; e.currentTarget.style.borderColor = "rgba(240,235,228,0.15)"; }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);
  const [adminOpen, setAdminOpen] = useState(false);

  // Persistent Products State from MongoDB Atlas + LocalStorage Fallback
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem("driftex_products_catalog");
      if (saved) return JSON.parse(saved);
    } catch (err) {
      console.error("Failed to load products from storage:", err);
    }
    return INITIAL_PRODUCTS;
  });

  const safeSaveToStorage = (data) => {
    try {
      localStorage.setItem("driftex_products_catalog", JSON.stringify(data));
    } catch (err) {
      console.warn("Storage quota limit reached for local cache. Operating in live MongoDB Atlas cloud mode.", err);
    }
  };

  // Fetch live products from MongoDB Atlas
  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("/api/products");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setProducts(data);
            safeSaveToStorage(data);
          }
        }
      } catch (err) {
        console.warn("Could not fetch from MongoDB, using cached products:", err);
      }
    }
    loadProducts();
  }, []);

  const handleProductAdded = (newProduct) => {
    setProducts((prev) => {
      const updated = [newProduct, ...prev.filter((p) => (p.id || p._id) !== (newProduct.id || newProduct._id))];
      safeSaveToStorage(updated);
      return updated;
    });
  };

  const handleProductUpdated = (updatedProduct) => {
    setProducts((prev) => {
      const updated = prev.map((p) => ((p.id || p._id) === (updatedProduct.id || updatedProduct._id) ? updatedProduct : p));
      safeSaveToStorage(updated);
      return updated;
    });
  };

  const handleProductDeleted = (id) => {
    setProducts((prev) => {
      const updated = prev.filter((p) => (p.id || p._id) !== id);
      safeSaveToStorage(updated);
      return updated;
    });
  };

  const handleResetDefaults = (defaultList) => {
    setProducts(defaultList);
    safeSaveToStorage(defaultList);
  };

  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let text = "Hi DRIFTEX, I would like to make an enquiry.\n\n";
    if (formData.name) text += `Name: ${formData.name}\n`;
    if (formData.phone) text += `Phone/WhatsApp: ${formData.phone}\n`;
    if (formData.email) text += `Email: ${formData.email}\n`;
    if (formData.message) text += `Message: ${formData.message}\n`;
    const waUrl = `https://wa.me/917506408708?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keyboard shortcut to open admin: Shift + A
  useEffect(() => {
    const handleKey = (e) => {
      if (e.shiftKey && (e.key === "A" || e.key === "a")) {
        setAdminOpen(true);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleLogoClick = () => {
    setSelected(null);
    setAdminOpen(false);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ background: "#080809", color: "#f0ebe4", fontFamily: "'Outfit', sans-serif", minHeight: "100vh", overflowX: "hidden" }}>

      {/* Product Detail Modal */}
      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}

      {/* Owner Admin Portal */}
      {adminOpen && (
        <AdminPortal
          products={products}
          onProductAdded={handleProductAdded}
          onProductUpdated={handleProductUpdated}
          onProductDeleted={handleProductDeleted}
          onResetDefaults={handleResetDefaults}
          onClose={() => setAdminOpen(false)}
        />
      )}

      {/* NAV */}
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: "0 2.5rem",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(8,8,9,0.93)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(240,235,228,0.07)" : "none",
        transition: "all 0.4s ease",
      }}>
        {/* Clickable Logo Navigating to Top */}
        <div
          onClick={handleLogoClick}
          style={{ display: "flex", flexDirection: "column", lineHeight: 1, cursor: "pointer" }}
          className="group"
          title="DRIFTEX Home"
        >
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: "1.3rem", fontWeight: 700, letterSpacing: "0.05em", color: "#f0ebe4", transition: "color 0.2s" }}
            className="group-hover:text-[#c8a97e]"
          >
            DRIFTEX<span style={{ color: "#c8a97e", fontSize: "0.7rem", verticalAlign: "super" }}>™</span>
          </span>
          <span style={{ fontSize: "0.52rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(200,169,126,0.7)", marginTop: "2px" }}>
            Stay Drifting
          </span>
        </div>

        <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="nav-links">
          {["Collection", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,235,228,0.55)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f0ebe4")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,235,228,0.55)")}
            >
              {item}
            </a>
          ))}
          <a href="#contact"
            style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#080809", background: "#c8a97e", padding: "0.5rem 1.25rem", textDecoration: "none", transition: "opacity 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Enquire
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#f0ebe4", padding: "8px", display: "none" }}
          className="nav-hamburger"
          aria-label="Toggle menu"
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <line x1="0" y1="1" x2="22" y2="1" stroke="currentColor" strokeWidth="1.5" />
            <line x1="0" y1="8" x2="22" y2="8" stroke="currentColor" strokeWidth="1.5" />
            <line x1="0" y1="15" x2="22" y2="15" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 99, background: "#080809", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2.5rem" }}>
          {["Collection", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "'Fraunces', serif", fontSize: "2.5rem", fontWeight: 300, color: "#f0ebe4", textDecoration: "none", fontStyle: "italic" }}
            >
              {item}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}
            style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#080809", background: "#c8a97e", padding: "0.875rem 2rem", textDecoration: "none" }}
          >
            Enquire Now
          </a>
          <button
            onClick={() => { setMenuOpen(false); setAdminOpen(true); }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "rgba(240,235,228,0.25)",
              padding: "0.5rem",
              marginTop: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Settings"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          </button>
        </div>
      )}

      {/* HERO */}
      <section style={{ position: "relative", height: "100vh", minHeight: "640px", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        {/* Authentic DRIFTEX waist detail photo positioned from top */}
        <img
          src={imgWaistDetail}
          alt="DRIFTEX Denim Jeans"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            filter: "brightness(0.72) contrast(1.08)",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,9,0.92) 0%, rgba(8,8,9,0.25) 50%, rgba(8,8,9,0.1) 75%, rgba(8,8,9,0.5) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(8,8,9,0.6) 0%, rgba(8,8,9,0.2) 50%, transparent 100%)" }} />

        <div style={{ position: "relative", zIndex: 2, width: "100%", padding: "0 2.5rem 5.5rem" }}>
          <FadeIn>
            <p style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.25em", textTransform: "uppercase", color: "#c8a97e", marginBottom: "1.25rem" }}>
              Mumbai · Est. Premium Denim Manufacturing
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <h1 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: "-0.025em",
              color: "#f0ebe4",
              marginBottom: "2rem",
            }}>
              Stay<br /><em style={{ fontStyle: "italic", color: "#c8a97e" }}>Drifting.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={160}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.75rem", flexWrap: "wrap" }}>
              <a href="#collection"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#080809", background: "#f0ebe4", padding: "1rem 2rem", textDecoration: "none", transition: "background 0.25s" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#c8a97e")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#f0ebe4")}
              >
                View Collection
                <svg width="14" height="9" viewBox="0 0 14 9" fill="none"><path d="M0 4.5H12M8.5 1L12 4.5L8.5 8" stroke="currentColor" strokeWidth="1.5" /></svg>
              </a>
              <a href="#contact"
                style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(240,235,228,0.5)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f0ebe4")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,235,228,0.5)")}
              >
                Wholesale Enquiry
              </a>
            </div>
          </FadeIn>
        </div>

        <div style={{ position: "absolute", bottom: "2.5rem", right: "2.5rem", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", color: "rgba(240,235,228,0.3)", fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          <div style={{ width: "1px", height: "48px", background: "rgba(240,235,228,0.15)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, width: "100%", height: "40%", background: "#c8a97e", animation: "scrollLine 2s ease-in-out infinite" }} />
          </div>
          Scroll
        </div>
      </section>

      {/* STAT BAR */}
      <FadeIn>
        <div style={{ borderTop: "1px solid rgba(240,235,228,0.08)", borderBottom: "1px solid rgba(240,235,228,0.08)", display: "grid", gridTemplateColumns: "repeat(4,1fr)", background: "#0d0d10" }} className="stat-grid">
          {[
            { num: "100%", label: "Premium Quality" },
            { num: "B2B", label: "Wholesale Ready" },
            { num: "All", label: "Sizes Available (28-38)" },
            { num: "PAN", label: "India Delivery" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "2.5rem 1.5rem", borderRight: i < 3 ? "1px solid rgba(240,235,228,0.07)" : "none", textAlign: "center" }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontWeight: 700, color: "#f0ebe4", lineHeight: 1 }}>
                {s.num}
              </div>
              <div style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,235,228,0.4)", marginTop: "0.5rem" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* COLLECTION */}
      <section id="collection" style={{ padding: "7rem 2.5rem" }}>
        <FadeIn>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c8a97e", marginBottom: "0.75rem", fontWeight: 500 }}>
                2025 Collection
              </p>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 700, lineHeight: 0.95, color: "#f0ebe4" }}>
                The Driftex<br /><em style={{ fontStyle: "italic" }}>Range</em>
              </h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <p style={{ fontSize: "0.78rem", color: "rgba(240,235,228,0.35)", fontWeight: 300, maxWidth: "280px", lineHeight: 1.6 }}>
                Click any style to explore details
              </p>
            </div>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5px", background: "rgba(240,235,228,0.06)" }}>
          {products.map((product, i) => (
            <FadeIn key={product.id} delay={i * 70}>
              <div
                onClick={() => setSelected(product)}
                onMouseEnter={() => setHovered(product.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ position: "relative", background: "#080809", cursor: "pointer", overflow: "hidden" }}
              >
                <div style={{ position: "relative", paddingBottom: "128%", overflow: "hidden", background: "#141418" }}>
                  <img
                    src={product.img}
                    alt={product.name}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                      transition: "transform 0.65s ease",
                      transform: hovered === product.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(8,8,9,0.65) 0%, transparent 45%)",
                    opacity: hovered === product.id ? 1 : 0,
                    transition: "opacity 0.4s",
                  }} />

                  {/* Tag */}
                  <div style={{ position: "absolute", top: "1rem", left: "1rem", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#080809", background: "#c8a97e", padding: "0.28rem 0.65rem" }}>
                    {product.tag}
                  </div>

                  {/* Hover CTA */}
                  <div style={{
                    position: "absolute",
                    bottom: "1.25rem",
                    left: "1.25rem",
                    right: "1.25rem",
                    opacity: hovered === product.id ? 1 : 0,
                    transform: hovered === product.id ? "translateY(0)" : "translateY(10px)",
                    transition: "all 0.35s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#f0ebe4",
                  }}>
                    View Details
                    <svg width="13" height="8" viewBox="0 0 13 8" fill="none"><path d="M0 4H11M8 1L11 4L8 7" stroke="currentColor" strokeWidth="1.25" /></svg>
                  </div>
                </div>

                <div style={{ padding: "1.4rem 1.5rem", borderTop: "1px solid rgba(240,235,228,0.07)" }}>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: "1.15rem", fontWeight: 600, color: "#f0ebe4", marginBottom: "0.3rem" }}>
                    {product.name}
                  </h3>
                  <p style={{ fontSize: "0.75rem", color: "rgba(240,235,228,0.38)", fontWeight: 300, lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {product.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* DETAIL BANNER — folded jeans close-up with quote */}
      <section style={{ position: "relative", height: "340px", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `url("${imgDetailAngle}") center/cover no-repeat`, filter: "brightness(0.32) contrast(1.15)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(8,8,9,0.85) 0%, transparent 50%, rgba(8,8,9,0.85) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 2rem" }}>
          <FadeIn>
            <p style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(1.6rem, 3.5vw, 2.75rem)", fontWeight: 300, fontStyle: "italic", color: "#f0ebe4", lineHeight: 1.3, maxWidth: "640px" }}>
              &ldquo;Crafted in Mumbai.<br />Worn everywhere.&rdquo;
            </p>
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c8a97e", marginTop: "1.25rem", fontWeight: 500 }}>
              — Driftex™ Stay Drifting
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "7rem 2.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center", maxWidth: "1100px", margin: "0 auto" }} className="about-grid">
          <FadeIn>
            <div style={{ position: "relative" }}>
              <div style={{ paddingBottom: "115%", position: "relative", overflow: "hidden", background: "#141418" }}>
                <img
                  src={imgFolded}
                  alt="Driftex jeans folded showing brand tags"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.9) contrast(1.05)" }}
                />
              </div>
              {/* Floating label */}
              <div style={{ position: "absolute", bottom: "-1.5rem", right: "-1rem", background: "#111114", border: "1px solid rgba(240,235,228,0.08)", padding: "1.25rem 1.75rem" }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: "1.75rem", fontWeight: 700, color: "#f0ebe4", lineHeight: 1 }}>
                  B2B
                </div>
                <div style={{ fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(240,235,228,0.4)", marginTop: "0.3rem" }}>
                  Wholesale Supply
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={140}>
            <div>
              <p style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c8a97e", marginBottom: "1rem", fontWeight: 500 }}>
                About Driftex
              </p>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 700, lineHeight: 1.05, color: "#f0ebe4", marginBottom: "1.75rem" }}>
                Manufacturer &amp;<br /><em style={{ fontStyle: "italic" }}>Wholesaler</em>
              </h2>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.85, color: "rgba(240,235,228,0.52)", fontWeight: 300, marginBottom: "2rem", maxWidth: "460px" }}>
                Driftex™ is a Mumbai-based premium jeans manufacturer and wholesaler. We produce high-quality denim across fits and washes — built for retailers, distributors, and brands looking for dependable, premium supply.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {["Premium denim manufacturing", "Wholesale & bulk orders", "All sizes (28-38), multiple fits & washes", "Pan-India supply chain"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.9rem 0", borderBottom: "1px solid rgba(240,235,228,0.07)" }}>
                    <div style={{ width: "4px", height: "4px", background: "#c8a97e", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.82rem", color: "rgba(240,235,228,0.6)", fontWeight: 300 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "7rem 2.5rem", borderTop: "1px solid rgba(240,235,228,0.07)", background: "#0a0a0c" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }} className="contact-grid">

          <FadeIn>
            <div>
              <p style={{ fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c8a97e", marginBottom: "1rem", fontWeight: 500 }}>
                Get in Touch
              </p>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 0.95, color: "#f0ebe4", marginBottom: "2.5rem" }}>
                Let&apos;s talk<br /><em style={{ fontStyle: "italic" }}>denim.</em>
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {[
                  {
                    label: "Address",
                    value: "Shop #31, Edwan D'Souza Compound, Khairani Road, Opp Hari Masjid, Sakinaka, Andheri (East), Mumbai — 400 072",
                    isLink: false,
                  },
                  {
                    label: "Phone",
                    value: "+91 75064 08708 / +91 84520 18620",
                    isLink: true,
                    href: "tel:+917506408708",
                  },
                  {
                    label: "Email",
                    value: "driftex.in@gmail.com",
                    isLink: true,
                    href: "mailto:driftex.in@gmail.com",
                  },
                  {
                    label: "Instagram",
                    value: "driftex.in",
                    isLink: true,
                    href: "https://instagram.com/driftex.in",
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <p style={{ fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c8a97e", marginBottom: "0.4rem" }}>
                      {item.label}
                    </p>
                    {item.isLink ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" style={{ fontSize: "0.88rem", color: "rgba(240,235,228,0.75)", textDecoration: "none", fontWeight: 300, lineHeight: 1.6, transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#c8a97e")} onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,235,228,0.75)")}>
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: "0.88rem", color: "rgba(240,235,228,0.6)", fontWeight: 300, lineHeight: 1.6 }}>
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <form onSubmit={handleFormSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Your Name"
                style={{ background: "transparent", border: "none", borderBottom: "1px solid rgba(240,235,228,0.18)", color: "#f0ebe4", fontSize: "0.88rem", padding: "0.875rem 0", outline: "none", fontFamily: "'Outfit', sans-serif", fontWeight: 300, transition: "border-color 0.2s", width: "100%" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#c8a97e")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(240,235,228,0.18)")}
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                placeholder="Phone / WhatsApp"
                style={{ background: "transparent", border: "none", borderBottom: "1px solid rgba(240,235,228,0.18)", color: "#f0ebe4", fontSize: "0.88rem", padding: "0.875rem 0", outline: "none", fontFamily: "'Outfit', sans-serif", fontWeight: 300, transition: "border-color 0.2s", width: "100%" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#c8a97e")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(240,235,228,0.18)")}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="Email Address"
                style={{ background: "transparent", border: "none", borderBottom: "1px solid rgba(240,235,228,0.18)", color: "#f0ebe4", fontSize: "0.88rem", padding: "0.875rem 0", outline: "none", fontFamily: "'Outfit', sans-serif", fontWeight: 300, transition: "border-color 0.2s", width: "100%" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#c8a97e")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(240,235,228,0.18)")}
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                placeholder="Message — product, quantity, or enquiry type"
                rows={4}
                style={{ background: "transparent", border: "none", borderBottom: "1px solid rgba(240,235,228,0.18)", color: "#f0ebe4", fontSize: "0.88rem", padding: "0.875rem 0", outline: "none", fontFamily: "'Outfit', sans-serif", fontWeight: 300, resize: "none", transition: "border-color 0.2s", width: "100%" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#c8a97e")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(240,235,228,0.18)")}
              />
              <button
                type="submit"
                style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#080809", background: "#f0ebe4", padding: "1rem 2rem", border: "none", cursor: "pointer", fontFamily: "'Outfit', sans-serif", marginTop: "0.5rem", transition: "background 0.25s", width: "100%" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#c8a97e")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#f0ebe4")}
              >
                Send Enquiry
              </button>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(240,235,228,0.07)", padding: "2.5rem 2.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", background: "#060607" }}>
        <div
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
          title="DRIFTEX Home"
        >
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: "1.1rem", fontWeight: 700, color: "#f0ebe4", letterSpacing: "0.05em" }}>
            DRIFTEX<span style={{ color: "#c8a97e", fontSize: "0.6rem", verticalAlign: "super" }}>™</span>
          </div>
          <div style={{ fontSize: "0.55rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(200,169,126,0.55)", marginTop: "3px" }}>
            Stay Drifting
          </div>
        </div>

        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "center" }}>
          {["Collection", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              style={{ fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(240,235,228,0.35)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f0ebe4")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240,235,228,0.35)")}
            >
              {item}
            </a>
          ))}

          {/* Discreet Admin Lock Icon Only */}
          <button
            onClick={() => setAdminOpen(true)}
            style={{
              background: "none",
              border: "none",
              color: "rgba(240,235,228,0.25)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.25rem",
              transition: "color 0.2s, opacity 0.2s",
              opacity: 0.6,
            }}
            aria-label="Admin"
            title="Settings"
            onMouseEnter={(e) => { e.currentTarget.style.color = "#c8a97e"; e.currentTarget.style.opacity = "1"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(240,235,228,0.25)"; e.currentTarget.style.opacity = "0.6"; }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          </button>
        </div>

        <p style={{ fontSize: "0.6rem", letterSpacing: "0.06em", color: "rgba(240,235,228,0.2)", fontWeight: 300 }}>
          © {new Date().getFullYear()} Driftex™. Mumbai, India.
        </p>
      </footer>

      {/* Floating WhatsApp CTA */}
      <WhatsAppButton />

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
        @keyframes fadeInModal {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUpModal {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        input::placeholder, textarea::placeholder { color: rgba(240,235,228,0.28); }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: block !important; }
          .about-grid, .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .stat-grid { grid-template-columns: repeat(2,1fr) !important; }
          .stat-grid > div:nth-child(2) { border-right: none !important; }
          .modal-grid { grid-template-columns: 1fr !important; max-height: 92vh; overflow-y: auto; }
        }
        @media (min-width: 769px) {
          .nav-hamburger { display: none !important; }
        }
      `}</style>
    </div>
  );
}