import { FEATS } from "../data";

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="features-header">
          <span className="section-badge">Why Farmers Choose Us</span>
          <h2 className="section-title">Local Service That Goes the Extra Mile</h2>
          <p className="section-sub">We're not just a shop — we're your farming neighbours with the same soil under our boots.</p>
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
