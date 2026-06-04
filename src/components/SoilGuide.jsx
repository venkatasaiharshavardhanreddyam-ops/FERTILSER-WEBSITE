import { useState } from "react";
import { SOIL_RECS } from "../data";
import Ic from "../icons";
import { useLanguage } from "../LanguageContext";

export default function SoilGuide() {
  const { t } = useLanguage();
  const [crop, setCrop] = useState("");
  const [soil, setSoil] = useState("");
  const rec = crop && soil ? SOIL_RECS[crop]?.[soil] : null;
  const query = rec ? encodeURIComponent(`Hi! Based on your soil guide, I need: ${rec.recs[0]}. Please share price.`) : "";

  return (
    <section className="soil-guide" id="soilguide">
      <div className="container">
        <div className="soil-guide-inner">
          <div>
            <span className="section-badge">{t("soilGuide.badge")}</span>
            <h2 className="section-title">{t("soilGuide.title")}</h2>
            <p className="section-sub" style={{ marginBottom: 24 }}>
              {t("soilGuide.sub")}
            </p>
            <div style={{ background: "var(--green-pale)", border: "1px solid var(--green-light)", borderRadius: "var(--radius)", padding: "20px 22px", marginTop: 8 }}>
              <p style={{ fontWeight: 700, color: "var(--green-dark)", fontSize: ".9rem", marginBottom: 8 }}>💡 {t("soilGuide.tipTitle")}</p>
              <p style={{ fontSize: ".85rem", color: "var(--text-mid)", lineHeight: 1.65 }}>
                {t("soilGuide.tipBody")}
              </p>
            </div>
          </div>
          <div className="soil-widget">
            <h3>🌱 {t("soilGuide.widgetTitle")}</h3>
            <p>{t("soilGuide.widgetSubtitle")}</p>
            <div className="form-group">
              <label>{t("soilGuide.cropLabel")}</label>
              <select value={crop} onChange={e => setCrop(e.target.value)}>
                <option value="">{t("soilGuide.cropPlaceholder")}</option>
                {Object.keys(SOIL_RECS).map(name => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>{t("soilGuide.soilLabel")}</label>
              <select value={soil} onChange={e => setSoil(e.target.value)}>
                <option value="">{t("soilGuide.soilPlaceholder")}</option>
                <option value="Clayey">Clayey</option>
                <option value="Sandy">Sandy</option>
                <option value="Loamy">Loamy</option>
              </select>
            </div>
            {rec ? (
              <div className="soil-result">
                <h4>📋 {t("soilGuide.recommendationHeader")}</h4>
                <ul>
                  {rec.recs.map(item => <li key={item}>{item}</li>)}
                </ul>
                <p style={{ fontSize: ".78rem", color: "var(--text-soft)", marginTop: 12, fontStyle: "italic" }}>
                  ℹ️ {rec.note}
                </p>
                <a
                  href={`https://wa.me/918179914909?text=${query}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp wa-btn"
                >
                  {Ic.wa} {t("soilGuide.orderButton")}
                </a>
              </div>
            ) : crop && soil ? (
              <div className="soil-result">
                <p>{t("soilGuide.noRec")}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
