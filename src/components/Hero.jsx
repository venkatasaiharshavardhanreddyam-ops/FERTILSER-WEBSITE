import Ic from "../icons";
import { useLanguage } from "../LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const trustItems = t("hero.trust");

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-inner">
          <div>
            <div className="hero-badge-row">
              <div className="hero-badge-live">
                <span className="live-dot" />
                {t("hero.badge")}
              </div>
              <span style={{ fontSize: ".78rem", fontWeight: 700, color: "var(--text-soft)" }}>
                {t("hero.line")}
              </span>
            </div>
            <h1>
              {t("hero.titleBefore")}<em>{t("hero.titleEm")}</em>
            </h1>
            <p className="hero-sub">
              {t("hero.sub")}
            </p>
            <div className="hero-ctas">
              <a href="tel:+918179914909" className="btn btn-amber">{Ic.phone} {t("hero.callNow")}</a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=1-7-483+Parnapalli+Circle,+Pulivendula,+YSR+District,+Andhra+Pradesh+516390"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-green"
              >
                {Ic.dir} {t("hero.directions")}
              </a>
            </div>
            <div className="hero-trust">
              {trustItems.map(text => (
                <div className="trust-item" key={text}>{Ic.check}{text}</div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card-main">
              <div className="hero-card-emoji">🌾</div>
              <h3>{t("hero.bestSellersTitle")}</h3>
              <p>{t("hero.bestSellersDesc")}</p>
              <a
                href="https://wa.me/918179914909?text=Hi!%20I%20want%20to%20know%20about%20your%20best%20selling%20fertilizers."
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
                style={{ gap: 8 }}
              >
                {Ic.wa} {t("hero.chat")}
              </a>
            </div>
            <div className="hero-mini-cards">
              {[['500+', 'Happy Farmers'], ['3+', 'Years of Service'], ['100+', 'Products Stocked'], ['15km', 'Free Delivery Zone']].map(([value, label]) => (
                <div className="mini-card" key={label}>
                  <div className="mini-card-num">{value}</div>
                  <div className="mini-card-lbl">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
