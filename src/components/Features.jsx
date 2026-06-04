import { FEATS } from "../data";
import { useLanguage } from "../LanguageContext";

export default function Features() {
  const { t } = useLanguage();

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <span className="section-badge">{t("features.badge")}</span>
          <h2 className="section-title">{t("features.title")}</h2>
          <p className="section-sub">{t("features.sub")}</p>
        </div>
        <div className="features-grid">
          {FEATS.map(item => (
            <div className="feat-card" key={item.title}>
              <div className="feat-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
