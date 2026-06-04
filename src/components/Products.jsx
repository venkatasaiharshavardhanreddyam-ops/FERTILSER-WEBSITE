import { useState } from "react";
import { PRODUCTS } from "../data";
import Ic from "../icons";
import { useLanguage } from "../LanguageContext";

const buildWhatsappQuery = name => encodeURIComponent(`Hi! I'm interested in ${name}. Please share price & availability.`);

export default function Products() {
  const { t } = useLanguage();
  const tabs = Object.keys(PRODUCTS);
  const [active, setActive] = useState(tabs[0]);

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="products-header">
          <span className="section-badge">{t("products.badge")}</span>
          <h2 className="section-title">{t("products.title")}</h2>
          <p className="section-sub">{t("products.sub")}</p>
        </div>
        <div className="tabs">
          {tabs.map(tab => (
            <button key={tab} className={`tab-btn${active === tab ? " active" : ""}`} onClick={() => setActive(tab)}>
              {tab}
            </button>
          ))}
        </div>
        <div className="products-grid">
          {PRODUCTS[active].map(product => (
            <div className="prod-card" key={product.name}>
              <div className="prod-thumb" style={{ background: product.bg }}>
                <span>{product.emoji}</span>
                <span className="prod-brand-tag">{product.brand}</span>
              </div>
              <div className="prod-body">
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <div className="prod-sizes">
                  {product.sizes.map(size => (
                    <span className="size-chip" key={size}>{size}</span>
                  ))}
                </div>
                <a
                  href={`https://wa.me/918179914909?text=${buildWhatsappQuery(product.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                >
                  {Ic.wa} {t("products.whatsapp")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
