import Ic from "../icons";

const CONTACT_ITEMS = [
  [Ic.map18, "Our Address", "1-7-483, Parnapalli Circle, Pulivendula, YSR District, Andhra Pradesh – 516390"],
  [Ic.phone, "Call / WhatsApp", " +91 8179914909 (Mobile)"],
  [Ic.mail18, "Email Us", "ajendraaji@gmail.com"],
  [Ic.clock, "Shop Hours", "Mon–Sat: 7:00 AM – 6:00 PM | Sunday: 8:00 AM – 1:00 PM"],
];

export default function Footer() {
  return (
    <footer className="contact-section" id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-copy">
            <h2>Visit Us or Get in Touch</h2>
            <p>We're open 6 days a week. Walk in anytime for free advice, or reach us instantly on WhatsApp.</p>
            <div className="contact-items">
              {CONTACT_ITEMS.map(([icon, label, value]) => (
                <div className="contact-item" key={label}>
                  <div className="contact-icon">{icon}</div>
                  <div className="contact-item-text">
                    <strong>{label}</strong>
                    <span>{value}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="social-row">
              {['FB', 'WA', 'YT', 'IN'].map(network => (
                <a key={network} href="#" className="social-btn">{network}</a>
              ))}
            </div>
          </div>
          <div className="map-card">
            <div className="map-placeholder">
              <div className="map-pin-pulse" />
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <div style={{ fontWeight: 800, color: "var(--white)", fontSize: "1rem", marginBottom: 4 }}>Sri Aswartha Narayana Swamy Traders</div>
                <div style={{ fontSize: ".82rem", opacity: .7 }}>1-7-483, Parnapalli Circle<br />Pulivendula, YSR District, AP 516390</div>
              </div>
              <div style={{ fontSize: ".75rem", opacity: .5, fontStyle: "italic" }}>
                Replace with embedded Google Maps iframe
              </div>
            </div>
            <div className="map-card-footer">
              <span>📍 Open in Maps App</span>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer">
                Get Directions {Ic.arrow}
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom-bar">
          <span>© {new Date().getFullYear()} Sri Aswartha Narayana Swamy Traders, Pulivendula. All rights reserved.</span>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Refund Policy</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
