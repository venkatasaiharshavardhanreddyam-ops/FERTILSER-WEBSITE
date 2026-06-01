import Ic from "../icons";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-inner">
          <div>
            <div className="hero-badge-row">
              <div className="hero-badge-live">
                <span className="live-dot" />
                Shop Open Today
              </div>
              <span style={{ fontSize: ".78rem", fontWeight: 700, color: "var(--text-soft)" }}>
                 Pulivendula's#1 Agri Store
              </span>
            </div>
            <h1>
              Your Trusted Local Partner for <em>Better Yields.</em>
            </h1>
            <p className="hero-sub">
              Serving Pulivendula for over <strong>3 years</strong>. Premium fertilizers, certified seeds, and crop protection solutions — right in your neighbourhood, at honest prices.
            </p>
            <div className="hero-ctas">
              <a href="tel:+918179914909" className="btn btn-amber">{Ic.phone} Call Shop Now</a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=1-7-483+Parnapalli+Circle,+Pulivendula,+YSR+District,+Andhra+Pradesh+516390"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-green"
              >
                {Ic.dir} Get Directions
              </a>
            </div>
            <div className="hero-trust">
              {[["ISI Certified Brands", Ic.check], ["Free Farm Delivery", Ic.truck], ["Expert Soil Advice", Ic.leaf]].map(([text, icon]) => (
                <div className="trust-item" key={text}>{icon}{text}</div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card-main">
              <div className="hero-card-emoji">🌾</div>
              <h3>This Season's Best Sellers</h3>
              <p>
                Urea 45% N, NPK 20-20-0, and Premium Compost flying off our shelves. Visit us or WhatsApp to reserve your bags.
              </p>
              <a
                href="https://wa.me/918179914909?text=Hi!%20I%20want%20to%20know%20about%20your%20best%20selling%20fertilizers."
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
                style={{ gap: 8 }}
              >
                {Ic.wa} Chat on WhatsApp
              </a>
            </div>
            <div className="hero-mini-cards">
              {[["500+", "Happy Farmers"], ["3+", "Years of Service"], ["100+", "Products Stocked"], ["15km", "Free Delivery Zone"]].map(([value, label]) => (
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
