import { useState, useEffect } from "react";
import Ic from "../icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToSection = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

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
          {[["Home", "home"], ["Our Products", "products"], ["Soil Advice", "soilguide"], ["Store Location", "contact"]].map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={e => { e.preventDefault(); scrollToSection(id); }}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a href="tel:+918179914909" className="btn btn-amber" style={{ display: "flex" }}>
          {Ic.phone} Call Now
        </a>

        <button className={`hamburger${open ? " open" : ""}`} onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`mobile-menu${open ? " open" : ""}`}>
        {[["Home", "home"], ["Our Products", "products"], ["Soil Advice", "soilguide"], ["About Us", "about"], ["Store Location", "contact"]].map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={e => { e.preventDefault(); scrollToSection(id); }}>
            {label}
          </a>
        ))}
        <a href="tel:+918179914909" className="btn btn-amber">{Ic.phone} Call Shop Now</a>
      </div>
    </nav>
  );
}
