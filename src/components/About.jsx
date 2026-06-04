import Ic from "../icons";
import { useLanguage } from "../LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const HIGHLIGHTS = t("about.highlights");

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-visual">
            <div className="about-img-card">
              <div style={{ fontSize: "4rem", marginBottom: 12 }}>👨‍🌾</div>
              <h3>"{t("about.quote")}"</h3>
              <p>{t("about.founder")}</p>
            </div>
            <div className="about-float">
              <div className="about-float-num">3+</div>
              <div className="about-float-lbl">Years Trusted</div>
            </div>
          </div>
          <div className="about-copy">
            <span className="section-badge">{t("about.badge")}</span>
            <h2 className="section-title">{t("about.title")}</h2>
            <p>{t("about.paragraph1")}</p>
            <p>{t("about.paragraph2")}</p>
            <div className="about-highlights">
              {HIGHLIGHTS.map(([title, subtitle]) => (
                <div className="highlight-item" key={title}>
                  <strong>✅ {title}</strong>
                  <span>{subtitle}</span>
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/918179914909?text=Hi%20Sri%20Aswartha%20Narayana%20Swamy%20Traders!%20I%20want%20to%20know%20more%20about%20your%20store."
              target="_blank"
              rel="noreferrer"
              className="btn btn-green"
            >
              {Ic.wa} {t("about.chat")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
