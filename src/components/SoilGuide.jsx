import { useState } from "react";
import { SOIL_RECS } from "../data";
import Ic from "../icons";

export default function SoilGuide() {
  const [crop, setCrop] = useState("");
  const [soil, setSoil] = useState("");
  const rec = crop && soil ? SOIL_RECS[crop]?.[soil] : null;
  const query = rec ? encodeURIComponent(`Hi! Based on your soil guide, I need: ${rec.recs[0]}. Please share price.`) : "";

  return (
    <section className="soil-guide" id="soilguide">
      <div className="container">
        <div className="soil-guide-inner">
          <div>
            <span className="section-badge">Free Expert Tool</span>
            <h2 className="section-title">Find the Right Fertilizer for Your Farm</h2>
            <p className="section-sub" style={{ marginBottom: 24 }}>
              Our in-store agronomist built this simple guide based on 3+ years of local farming experience in YSR District. Select your crop and soil type below.
            </p>
            <div style={{ background: "var(--green-pale)", border: "1px solid var(--green-light)", borderRadius: "var(--radius)", padding: "20px 22px", marginTop: 8 }}>
              <p style={{ fontWeight: 700, color: "var(--green-dark)", fontSize: ".9rem", marginBottom: 8 }}>💡 Pro Tip from Our Team</p>
              <p style={{ fontSize: ".85rem", color: "var(--text-mid)", lineHeight: 1.65 }}>
                For best results, bring a 500g soil sample from 6-inch depth to our shop. Our in-store test gives you a precise NPK deficiency report — absolutely free for our customers!
              </p>
            </div>
          </div>
          <div className="soil-widget">
            <h3>🌱 Fertilizer Recommendation Finder</h3>
            <p>Customised for YSR District soil conditions.</p>
            <div className="form-group">
              <label>Select Your Crop</label>
              <select value={crop} onChange={e => setCrop(e.target.value)}>
                <option value="">— Choose crop type —</option>
                {Object.keys(SOIL_RECS).map(name => (
                  <option key={name} value={name}>{name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Select Your Soil Type</label>
              <select value={soil} onChange={e => setSoil(e.target.value)}>
                <option value="">— Choose soil type —</option>
                <option value="Clayey">Clayey</option>
                <option value="Sandy">Sandy</option>
                <option value="Loamy">Loamy</option>
              </select>
            </div>
            {rec ? (
              <div className="soil-result">
                <h4>📋 Recommended Fertilizer Programme</h4>
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
                  {Ic.wa} Order These on WhatsApp
                </a>
              </div>
            ) : crop && soil ? (
              <div className="soil-result">
                <p>Sorry, we don't have a recommendation for this combination yet. Please call us!</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
