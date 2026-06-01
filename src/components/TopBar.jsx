import Ic from "../icons";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-items">
          <span className="topbar-item">{Ic.map} 1-7-483, Parnapalli Circle, Pulivendula, AP 516360</span>
          <span className="topbar-item">{Ic.clock} Mon–Sat: 7 AM – 6 PM &nbsp;|&nbsp; Sun: 8 AM – 1 PM</span>
        </div>
        <a href="tel:+918179914909" className="topbar-call">📞 +91 81799 14909</a>
      </div>
    </div>
  );
}
