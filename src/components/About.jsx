import Ic from "../icons";

const HIGHLIGHTS = [
  ["Family Owned & Operated", "Since 2024, still run by the Devara Ajendra Reddy"],
  ["No-Counterfeit Guarantee", "We buy directly from certified distributors"],
  ["Agri-Expert Counter", "3 in-store agronomists, walk-in welcome"],
  ["Seasonal Credit Available", "For long-term, trusted farmer customers"],
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-visual">
            <div className="about-img-card">
              <div style={{ fontSize: "4rem", marginBottom: 12 }}>👨‍🌾</div>
              <h3>"We grow when our farmers grow."</h3>
              <p>— Devara Ajendra Reddy, Founder & Owner, Sri Aswartha Narayana Swamy Traders
              </p>
            </div>
            <div className="about-float">
              <div className="about-float-num">3+</div>
              <div className="about-float-lbl">Years Trusted</div>
            </div>
          </div>
          <div className="about-copy">
            <span className="section-badge">Our Story</span>
            <h2 className="section-title">A Shop Born from the Fields of Pulivendula</h2>
            <p>
              Sri Aswartha Narayana Swamy Traders was started in 2024 by Devara Ajendra Reddy — a farmer's son who grew up walking these very fields. After watching local farmers overpay for substandard inputs from distant wholesalers, Ajendra Reddy opened a shop right in the heart of Pulivendula to give every farmer direct access to quality products at fair, transparent prices.
            </p>
            <p>
              Today, we are proud to serve over 500 farming families across the district. We stock only brands that pass our own quality check — no counterfeits, no adulteration. Our team of three qualified agronomists is always available at the counter for free advice, soil testing guidance, and fertilizer scheduling support.
            </p>
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
              {Ic.wa} Chat with Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
