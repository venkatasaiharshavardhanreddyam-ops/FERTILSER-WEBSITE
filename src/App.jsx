import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import SoilGuide from "./components/SoilGuide";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <SoilGuide />
      <About />
      <Footer />
      <a
        href="https://wa.me/918179914909?text=Hi%20SriAswarthaNarayanaSwamyTraders!%20I%20need%20help%20with%20fertilizer%20for%20my%20farm."
        target="_blank"
        rel="noreferrer"
        className="wa-float"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.529 5.845L.057 23.571l5.885-1.54A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.892a9.907 9.907 0 0 1-5.031-1.37l-.361-.214-3.732.979.997-3.643-.235-.374A9.862 9.862 0 0 1 2.108 12C2.108 6.63 6.63 2.108 12 2.108c5.371 0 9.892 4.522 9.892 9.892 0 5.371-4.521 9.892-9.892 9.892z" />
        </svg>
        <span>WhatsApp Us</span>
      </a>
    </>
  );
}
