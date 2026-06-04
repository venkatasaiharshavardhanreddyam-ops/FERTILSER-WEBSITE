import { createContext, useContext, useState } from "react";

const LANGUAGE_NAMES = {
  en: "English",
  te: "తెలుగు",
};

const MESSAGES = {
  en: {
    topbar: {
      address: "1-7-483, Parnapalli Circle, Pulivendula, AP 516390",
      hours: "Mon–Sat: 7 AM – 6 PM | Sun: 8 AM – 1 PM",
      call: "📞 +91 81799 14909",
    },
    nav: {
      home: "Home",
      products: "Our Products",
      soil: "Soil Advice",
      about: "About Us",
      contact: "Store Location",
      callNow: "Call Now",
      whatsapp: "WhatsApp Us",
    },
    hero: {
      badge: "Shop Open Today",
      line: "Pulivendula's #1 Agri Store",
      titleBefore: "Your Trusted Local Partner for ",
      titleEm: "Better Yields.",
      sub: "Serving Pulivendula for over 3 years. Premium fertilizers, certified seeds, and crop protection solutions — right in your neighbourhood, at honest prices.",
      callNow: "Call Shop Now",
      directions: "Get Directions",
      trust: ["ISI Certified Brands", "Free Farm Delivery", "Expert Soil Advice"],
      bestSellersTitle: "This Season's Best Sellers",
      bestSellersDesc: "Urea 45% N, NPK 20-20-0, and Premium Compost flying off our shelves. Visit us or WhatsApp to reserve your bags.",
      chat: "Chat on WhatsApp",
    },
    features: {
      badge: "Why Farmers Choose Us",
      title: "Local Service That Goes the Extra Mile",
      sub: "We're not just a shop — we're your farming neighbours with the same soil under our boots.",
    },
    products: {
      badge: "Our Stock",
      title: "Everything Your Farm Needs",
      sub: "Quality brands at fair prices. Tap any product to enquire via WhatsApp instantly.",
      whatsapp: "Inquire on WhatsApp",
    },
    soilGuide: {
      badge: "Free Expert Tool",
      title: "Find the Right Fertilizer for Your Farm",
      sub: "Our in-store agronomist built this simple guide based on 3+ years of local farming experience in YSR District. Select your crop and soil type below.",
      tipTitle: "Pro Tip from Our Team",
      tipBody: "For best results, bring a 500g soil sample from 6-inch depth to our shop. Our in-store test gives you a precise NPK deficiency report — absolutely free for our customers!",
      widgetTitle: "Fertilizer Recommendation Finder",
      widgetSubtitle: "Customised for YSR District soil conditions.",
      cropLabel: "Select Your Crop",
      cropPlaceholder: "— Choose crop type —",
      soilLabel: "Select Your Soil Type",
      soilPlaceholder: "— Choose soil type —",
      recommendationHeader: "Recommended Fertilizer Programme",
      orderButton: "Order These on WhatsApp",
      noRec: "Sorry, we don't have a recommendation for this combination yet. Please call us!",
    },
    about: {
      badge: "Our Story",
      title: "A Shop Born from the Fields of Pulivendula",
      quote: "We grow when our farmers grow.",
      founder: "— Devara Ajendra Reddy, Founder & Owner, Sri Aswartha Narayana Swamy Traders",
      paragraph1:
        "Sri Aswartha Narayana Swamy Traders was started in 2024 by Devara Ajendra Reddy — a farmer's son who grew up walking these very fields. After watching local farmers overpay for substandard inputs from distant wholesalers, Ajendra Reddy opened a shop right in the heart of Pulivendula to give every farmer direct access to quality products at fair, transparent prices.",
      paragraph2:
        "Today, we are proud to serve over 500 farming families across the district. We stock only brands that pass our own quality check — no counterfeits, no adulteration. Our team of three qualified agronomists is always available at the counter for free advice, soil testing guidance, and fertilizer scheduling support.",
      highlights: [
        ["Family Owned & Operated", "Since 2024, still run by the Devara Ajendra Reddy"],
        ["No-Counterfeit Guarantee", "We buy directly from certified distributors"],
        ["Agri-Expert Counter", "3 in-store agronomists, walk-in welcome"],
        ["Seasonal Credit Available", "For long-term, trusted farmer customers"],
      ],
      chat: "Chat with Our Team",
    },
    footer: {
      title: "Visit Us or Get in Touch",
      sub: "We're open 6 days a week. Walk in anytime for free advice, or reach us instantly on WhatsApp.",
      contact: {
        address: "Our Address",
        phone: "Call / WhatsApp",
        email: "Email Us",
        hours: "Shop Hours",
      },
      mapNote: "📍 Exact store location shown on Google Maps",
      directions: "Get Directions",
      privacy: "Privacy",
      refund: "Refund Policy",
      contactLink: "Contact",
      copyright: "© {year} Sri Aswartha Narayana Swamy Traders, Pulivendula. All rights reserved.",
    },
  },
  te: {
    topbar: {
      address: "1-7-483, పర్ణపల్లి సర్కిల్, పులివెందుల, ఏపీ 516390",
      hours: "సోమ–శని: 7 AM – 6 PM | ఆదివారము: 8 AM – 1 PM",
      call: "📞 +91 81799 14909",
    },
    nav: {
      home: "హోం",
      products: "మన ఉత్పత్తులు",
      soil: "మట్టి సలహా",
      about: "మన గురించి",
      contact: "స్టోర్ స్థలం",
      callNow: "ఇప్పుడు కాల్ చేయండి",
      whatsapp: "వాట్సాప్ చాట్",
    },
    hero: {
      badge: "నేడు షాప్ తెరుచుకుంది",
      line: "పులివెందులలో #1 వ్యవసాయ స్టోర్",
      titleBefore: "మరింత దిగుబడికి మీ నమ్మకమైన స్థానిక భాగస్వామి ",
      titleEm: "వేడుకైన పంటలు.",
      sub: "మేము పులివెందులలో 3 సంవత్సరాలుగా సేవలు అందిస్తున్నాము. న్యాయమైన ధరల్లో ప్రీమియమ్ ఎరువులు, ధృవీకృత విత్తనాలు, మరియు పంట రక్షణ పరిష్కారాలు.",
      callNow: "ఇప్పుడు కాల్ చేయండి",
      directions: "దిశలు పొందండి",
      trust: ["ISI సర్టిఫైడ్ బ్రాండ్లు", "ఉచిత ఫార్మ్ డెలివరీ", "నిపుణుల మట్టి సలహా"],
      bestSellersTitle: "ఈ సీజన్ బెస్ట్‌సెలర్లు",
      bestSellersDesc: "Urea 45% N, NPK 20-20-0, మరియు ప్రీమియమ్ కంపోస్ట్ మా షెల్వ్‌ల నుంచి వేగంగా విక్రయమవుతున్నాయి. మీ బ్యాగులను రిజర్వ్ చేయడానికి మా షాప్ లేదా వాట్సాప్ సంప్రదించండి.",
      chat: "వాట్సాప్‌లో చాట్ చేయండి",
    },
    features: {
      badge: "ఎందుకు రైతులు మమ్మల్ని ఎంచుకుంటారు",
      title: "అదనపు శ్రద్ధ కలిగిన స్థానిక సేవ",
      sub: "మేము కేవలం ఒక దుకాణం కాదు — మేము అదే మట్టితో జీవించే మీ పొరుగువారమే.",
    },
    products: {
      badge: "మన స్టాక్",
      title: "మీ వ్యవసాయానికి అవసరమైన అన్నీ",
      sub: "న్యాయంతో ధరలలో నాణ్యమైన బ్రాండ్లు. వాట్సాప్ ద్వారా వెంటనే విచారించండి.",
      whatsapp: "వాట్సాప్‌లో విచారణ చేయండి",
    },
    soilGuide: {
      badge: "ఉచిత నిపుణుల సాధనం",
      title: "మీ వ్యవసాయానికి సరైన ఎరువు కనుగొనండి",
      sub: "YSR జిల్లాలో 3+ సంవత్సరాల స్థానిక వ్యవసాయ అనుభవంపై ఆధారపడి మా ఇన్-స్టోర్ అగ్రోనమిస్ట్ ఈ సాధారణ గైడ్‌ను రూపొందించారు. క్రింది మీ పంట మరియు మట్టి రకం ఎంచుకోండి.",
      tipTitle: "మా బృందం నుండి సూచన",
      tipBody: "ఉత్తమ ఫలితం కోసం, 6 ఇంచుల లోతు నుండి 500గ్రా మట్టి నమూనాను మా షాప్‌కి తీసుకువచ్చండి. మా ఇన్-స్టోర్ పరీక్ష మీకు ఖచ్చితమైన NPK లోప నివేదికను ఉచితంగా ఇస్తుంది!",
      widgetTitle: "ఎరువు సిఫారసుల కనుగొనుట సాధనం",
      widgetSubtitle: "YSR జిల్లా మట్టి పరిస్థితులకు అనుగుణంగా అనుకూలీకరించబడింది.",
      cropLabel: "మీ పంటను ఎంచుకోండి",
      cropPlaceholder: "— పంట రకాన్ని ఎంచుకోండి —",
      soilLabel: "మీ మట్టి రకాన్ని ఎంచుకోండి",
      soilPlaceholder: "— మట్టి రకాన్ని ఎంచుకోండి —",
      recommendationHeader: "సిఫారసుచేసిన ఎరువు ప్రోగ్రామ్",
      orderButton: "వాట్సాప్‌లో ఆర్డర్ చేయండి",
      noRec: "క్షమించండి, ఈ కలయికకి మాకు సిఫారసు లేదు. దయచేసి మమ్మల్ని కాల్ చేయండి!",
    },
    about: {
      badge: "మా కథ",
      title: "పులివెందుల పొలాల నుండి పుట్టిన ఒక షాప్",
      quote: "మన రైతులు పెరిగేప్పుడు మేము పెరుగుతాము.",
      founder: "— దేవర అజెంద్ర రెడ్డి, స్థాపకుడు & యజమాని, శ్రీ అస్వర్థ నారాయణ స్వామి ట్రేడర్స్",
      paragraph1:
        "శ్రీ అస్వర్థ నారాయణ స్వామి ట్రేడర్స్‌ను 2024లో దేవర అజెంద్ర రెడ్డి ప్రారంభించారు — ఒక రైతు కొడుకు, ఈ very fieldsలో నడిచి పెరిగాడు. దూరపు విక్రేతలతో పాటు తక్కువ నాణ్యత ఉత్పత్తుల కోసం రైతులు అధిక ధర చెల్లిస్తున్నారని చూసి, అతను పులివెందుల హృదయంలోనే నేరుగా నాణ్యత ఉత్పత్తులను అందించే దుకాణాన్ని ప్రారంభించాడు.",
      paragraph2:
        "ఇప్పటికీ, జిల్లా అంతటా 500కి పైగా వ్యవసాయ కుటుంబాలకు సేవలు అందిస్తున్నందుకు మేము గర్వంగా ఉన్నాము. కాపీ ఉత్పత్తులు, మిశ్రమాలు లేకుండా, మేము ధృవీకృత బ్రాండ్లను మాత్రమే నిల్వ ఉంచుతాము. మా ముగ్గురు అగ్రోనమిస్ట్లు ఉచిత సలహా, మట్టి పరీక్ష మార్గదర్శనం, మరియు ఎరువు షెడ్యూల్ మద్దతు అందిస్తారు.",
      highlights: [
        ["కుటుంబ ఆధారిత నిర్వహణ", "2024 నుండి కూడా దేవర అజెంద్ర రెడ్డి నిర్వహిస్తున్నారు"],
        ["నకిలీ ఉత్పత్తులపై హామీ", "మేము ధృవీకృత పంపిణీదారుల నుండి నేరుగా కొనుగోలు చేస్తాము"],
        ["అగ్రి-నిపుణుల కౌంటర్", "3 ఇన్-స్టోర్ అగ్రోనమిస్ట్లు, స్వాగతం"],
        ["వెసాయి క్రెడిట్ అందుబాటులో ఉంది", "దీర్ఘకాల, నమ్మకమైన రైతు వినియోగదారులకు"],
      ],
      chat: "మా బృందంతో చాట్ చేయండి",
    },
    footer: {
      title: "మమ్మల్ని సందర్శించండి లేదా సంప్రదించండి",
      sub: "మేము వారానికి 6 రోజులు తెరవబడుతుంటాము. ఉచిత సలహాకు ఎప్పుడైనా రండి, లేక వెంటనే వాట్సాప్ ద్వారా మమ్మల్ని చేరుకోండి.",
      contact: {
        address: "మా చిరునామా",
        phone: "కాల్ / వాట్సాప్",
        email: "ఇమెయిల్ చేయండి",
        hours: "షాప్ సమయాలు",
      },
      mapNote: "📍 గూగుల్ మ్యాప్స్‌లో ఖచ్చితమైన స్టోర్ స్థానం చూపబడింది",
      directions: "దిశలు పొందండి",
      privacy: " గోప్యత",
      refund: "రిఫండ్ పాలసీ",
      contactLink: "సంప్రదించండి",
      copyright: "© {year} శ్రీ అస్వర్థ నారాయణ స్వామి ట్రేడర్స్, పులివెందుల. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",
    },
  },
};

const defaultLocale = "en";

export const LanguageContext = createContext({
  locale: defaultLocale,
  setLocale: () => {},
  t: key => key,
  LANGUAGE_NAMES,
});

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState(defaultLocale);
  const t = key => {
    const value = key.split(".").reduce((obj, part) => obj?.[part], MESSAGES[locale]);
    return value ?? key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, LANGUAGE_NAMES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
