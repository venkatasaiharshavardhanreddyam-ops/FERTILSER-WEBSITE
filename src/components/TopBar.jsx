import Ic from "../icons";
import { useLanguage } from "../LanguageContext";

export default function TopBar() {
  const { t } = useLanguage();

  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-items">
          <span className="topbar-item">{Ic.map} {t("topbar.address")}</span>
          <span className="topbar-item">{Ic.clock} {t("topbar.hours")}</span>
        </div>
        <a href="tel:+918179914909" className="topbar-call">{t("topbar.call")}</a>
      </div>
    </div>
  );
}
