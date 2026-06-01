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
            <div className="map-embed">
              <iframe
                title="Sri Aswartha Narayana Swamy Traders location"
                src="https://maps.google.com/maps?q=1-7-483,+Parnapalli+Circle,+Pulivendula,+YSR+District,+Andhra+Pradesh+516390&z=16&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="map-card-footer">
              <span>📍 Exact store location shown on Google Maps</span>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=1-7-483+Parnapalli+Circle,+Pulivendula,+YSR+District,+Andhra+Pradesh+516390"
                target="_blank"
                rel="noreferrer"
              >
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
