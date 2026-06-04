import Ic from "../icons";
import { useLanguage } from "../LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const contactItems = [
    [Ic.map18, t("footer.contact.address"), "1-7-483, Parnapalli Circle, Pulivendula, YSR District, Andhra Pradesh – 516390"],
    [Ic.phone, t("footer.contact.phone"), " +91 8179914909 (Mobile)"],
    [Ic.mail18, t("footer.contact.email"), "ajendraaji@gmail.com"],
    [Ic.clock, t("footer.contact.hours"), "Mon–Sat: 7:00 AM – 6:00 PM | Sunday: 8:00 AM – 1:00 PM"],
  ];

  return (
    <footer className="contact-section" id="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-copy">
            <h2>{t("footer.title")}</h2>
            <p>{t("footer.sub")}</p>
            <div className="contact-items">
              {contactItems.map(([icon, label, value]) => (
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
              <span>{t("footer.mapNote")}</span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=1-7-483+Parnapalli+Circle,+Pulivendula,+YSR+District,+Andhra+Pradesh+516390"
                target="_blank"
                rel="noreferrer"
              >
                {t("footer.directions")} {Ic.arrow}
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom-bar">
          <span>{t("footer.copyright").replace("{year}", new Date().getFullYear())}</span>
          <div className="footer-links">
            <a href="#">{t("footer.privacy")}</a>
            <a href="#">{t("footer.refund")}</a>
            <a href="#">{t("footer.contactLink")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
