import { useState, useEffect } from "react";
import Ic from "../icons";
import { useLanguage } from "../LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale, t, LANGUAGE_NAMES } = useLanguage();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToSection = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const navItems = [
    ["home", "home"],
    ["products", "products"],
    ["soil", "soilguide"],
    ["contact", "contact"],
  ];

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="container navbar-inner">
        <div className="logo">
          <div className="logo-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8 6 4 10 4 14a8 8 0 0 0 16 0c0-4-4-8-8-12z" fill="#d8f3dc" stroke="#d8f3dc" strokeWidth="1" />
              <path d="M12 8v8M8 14c1.5-1 3-1.5 4-1.5s2.5.5 4 1.5" stroke="#2d6a4f" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div>Sri Aswartha Narayana Swamy Traders</div>
            <div className="logo-sub">Est. 2024 · Pulivendula, AP</div>
          </div>
        </div>

        <ul className="nav-links">
          {navItems.map(([key, id]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={e => { e.preventDefault(); scrollToSection(id); }}>
                {t(`nav.${key}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <a href="tel:+918179914909" className="btn btn-amber">
            {Ic.phone} {t("nav.callNow")}
          </a>
          <select value={locale} onChange={e => setLocale(e.target.value)} className="lang-select">
            {Object.entries(LANGUAGE_NAMES).map(([code, name]) => (
              <option key={code} value={code}>{name}</option>
            ))}
          </select>
        </div>

        <button className={`hamburger${open ? " open" : ""}`} onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`mobile-menu${open ? " open" : ""}`}>
        {[["home", "home"], ["products", "products"], ["soil", "soilguide"], ["about", "about"], ["contact", "contact"]].map(([key, id]) => (
          <a key={id} href={`#${id}`} onClick={e => { e.preventDefault(); scrollToSection(id); }}>
            {t(`nav.${key}`)}
          </a>
        ))}
        <a href="tel:+918179914909" className="btn btn-amber">{Ic.phone} {t("nav.callNow")}</a>
        <select value={locale} onChange={e => setLocale(e.target.value)} className="lang-select" style={{ marginTop: "1rem", width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid #ccc", background: "white", color: "#2d6a4f" }}>
          {Object.entries(LANGUAGE_NAMES).map(([code, name]) => (
            <option key={code} value={code}>{name}</option>
          ))}
        </select>
      </div>
    </nav>
  );
}
