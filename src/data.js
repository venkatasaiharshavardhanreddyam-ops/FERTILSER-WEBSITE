export const FEATS = [
  { icon: "🏆", title: "Top Trusted Brands", desc: "We stock only ISI-certified, high-yield brands like Coromandel, IFFCO, and GSFC — vetted for quality." },
  { icon: "🚚", title: "Free Local Delivery", desc: "Doorstep delivery to any farm within a 15 km radius. Bulk orders above 10 bags get priority same-day delivery." },
  { icon: "🧪", title: "Free Soil Testing Advice", desc: "Bring a soil sample to our counter and our in-store agri-expert will guide you to the right fertilizer mix." },
  { icon: "💳", title: "Flexible Payments", desc: "We accept cash, UPI (PhonePe, GPay, Paytm), and crop-season credit for trusted long-term customers." },
];

export const PRODUCTS = {
  "Popular Fertilizers": [
    { emoji: "🟡", name: "Urea 45% N (Prilled)", brand: "IFFCO", desc: "Fast-release nitrogen for vegetative growth. Best for paddy, maize, and sugarcane.", sizes: ["10kg", "25kg", "50kg"], bg: "#fffde7" },
    { emoji: "🔵", name: "NPK 20-20-0 Complex", brand: "Coromandel", desc: "Balanced nitrogen & phosphorus blend ideal for pre-sowing soil preparation.", sizes: ["25kg", "50kg"], bg: "#e3f2fd" },
    { emoji: "🟤", name: "Potash (MOP 60%)", brand: "GSFC", desc: "Improves drought resistance, fruit quality, and overall crop strength.", sizes: ["25kg", "50kg"], bg: "#fbe9e7" },
    { emoji: "🌿", name: "Premium Organic Compost", brand: "GreenFields Own", desc: "Fully matured farm compost enriched with microbes for soil health improvement.", sizes: ["10kg", "30kg", "50kg"], bg: "#e8f5e9" },
    { emoji: "⚗️", name: "DAP 18-46-0", brand: "NFL", desc: "Diammonium phosphate for strong root development at transplanting stage.", sizes: ["25kg", "50kg"], bg: "#f3e5f5" },
    { emoji: "🌾", name: "Single Super Phosphate", brand: "Rashtriya", desc: "Slow-release phosphorus with sulphur. Essential for pulses and oilseeds.", sizes: ["10kg", "25kg", "50kg"], bg: "#fff8e1" },
  ],
  "Crop Protection": [
    { emoji: "🌱", name: "Bio-Pesticide (Neem-based)", brand: "Biopestis", desc: "Eco-friendly neem oil concentrate. Controls aphids, thrips & whitefly safely.", sizes: ["250ml", "500ml", "1L"], bg: "#e8f5e9" },
    { emoji: "🛡️", name: "Mancozeb Fungicide 75%", brand: "Dhanuka", desc: "Broad-spectrum protective fungicide for blast, blight, and mildew control.", sizes: ["250g", "500g", "1kg"], bg: "#e1f5fe" },
    { emoji: "🌿", name: "Glyphosate Weedkiller", brand: "Monsanto", desc: "Non-selective post-emergence herbicide for general weed control in row crops.", sizes: ["500ml", "1L", "5L"], bg: "#f9fbe7" },
    { emoji: "🐛", name: "Chlorpyrifos 20% EC", brand: "Coromandel", desc: "Contact insecticide for soil pests, stem borers, and termite management.", sizes: ["250ml", "500ml", "1L"], bg: "#fff3e0" },
    { emoji: "🍃", name: "Trichoderma Viride Bio-Agent", brand: "T-Stanes", desc: "Biological fungicide for root rot and damping off prevention in seedlings.", sizes: ["100g", "250g", "1kg"], bg: "#e8f5e9" },
    { emoji: "💧", name: "Imidacloprid 17.8% SL", brand: "Bayer", desc: "Systemic insecticide for sucking pests in cotton, rice, and vegetables.", sizes: ["100ml", "250ml", "500ml"], bg: "#fce4ec" },
  ],
  "Seeds & Tools": [
    { emoji: "🌽", name: "Hybrid Maize Seed DHM-121", brand: "Pioneer", desc: "High-yield hybrid maize for kharif season. 100-105 day maturity, disease resistant.", sizes: ["1kg", "5kg"], bg: "#fff8e1" },
    { emoji: "🍅", name: "Tomato Hybrid Seed Arka Rakshak", brand: "IIHR Certified", desc: "Disease-tolerant indeterminate tomato variety, 65-70 day harvest window.", sizes: ["10g", "50g", "100g"], bg: "#fce4ec" },
    { emoji: "🌾", name: "Paddy Seed MTU-7029 (Swarna)", brand: "State Govt. Certified", desc: "Popular short-duration Swarna rice variety for both kharif and rabi seasons.", sizes: ["5kg", "10kg", "25kg"], bg: "#e8f5e9" },
    { emoji: "🪣", name: "16L Knapsack Sprayer", brand: "Aspee Gold", desc: "Durable hand-operated knapsack sprayer with anti-drip nozzle for field use.", sizes: ["1 Unit"], bg: "#e3f2fd" },
    { emoji: "🌿", name: "Green Chilli Hybrid Seed", brand: "Syngenta", desc: "Bold-fruited chilli variety with high pungency. Excellent shelf life and yield.", sizes: ["10g", "25g", "50g"], bg: "#f9fbe7" },
    { emoji: "🔧", name: "Hand Weeder / Khurpi Set", brand: "GreenFields Store", desc: "Heavy-duty stainless steel hand weeder set for inter-row weeding in small plots.", sizes: ["Set of 3"], bg: "#efebe9" },
  ],
};

export const SOIL_RECS = {
  "Paddy/Rice": {
    Clayey: {
      recs: [
        "Urea 45% N – 2 bags/acre (split: basal + top-dress at tillering)",
        "DAP 18-46-0 – 1 bag/acre as basal dose",
        "Zinc Sulphate 33% – 5 kg/acre for zinc-deficient clay soils",
        "Avoid heavy organic manure — clay soils retain nutrients well",
      ],
      note: "Clayey soils hold water well for paddy. Focus on nitrogen management.",
    },
    Sandy: {
      recs: [
        "Urea – Apply in 3 split doses (leaching risk in sand)",
        "Single Super Phosphate – 2 bags/acre as basal",
        "Compost/FYM – 2 tonnes/acre to improve water retention",
        "Potash (MOP 60%) – 1 bag/acre to reduce water stress",
      ],
      note: "Sandy soils drain fast — split fertilizer doses prevent nutrient loss.",
    },
    Loamy: {
      recs: [
        "NPK 20-20-0 – 1.5 bags/acre as basal fertilizer",
        "Urea – 1 bag/acre at active tillering stage",
        "Neem-coated Urea for slow release in loam",
        "Bio-NPK Consortium – Reduces chemical input by 20%",
      ],
      note: "Loamy soil is ideal for paddy — balanced fertilizer gives maximum yield.",
    },
  },
  Vegetables: {
    Clayey: {
      recs: [
        "NPK 12-32-16 Complex – 1 bag/acre for root development",
        "Trichoderma Viride – Prevents root rot common in heavy clay",
        "Lime/Gypsum – 100 kg/acre to reduce soil acidity",
        "Avoid waterlogging — ridge-and-furrow irrigation recommended",
      ],
      note: "Focus on drainage improvement and calcium nutrition for clay-grown vegetables.",
    },
    Sandy: {
      recs: [
        "Fertigation NPK 19-19-19 – Drip apply weekly",
        "Humic Acid Granules – 4 kg/acre to build sandy soil structure",
        "Compost – 3 tonnes/acre before planting",
        "Potassium Nitrate for fruit quality in fruiting vegetables",
      ],
      note: "Drip fertigation is highly recommended for sandy soil vegetable cultivation.",
    },
    Loamy: {
      recs: [
        "DAP 18-46-0 – 1 bag/acre at land preparation",
        "Potash MOP – 1 bag/acre at flowering stage",
        "Micronutrient Mix – Foliar spray at 15-day intervals",
        "Vermicompost – 500 kg/acre for best results in loam",
      ],
      note: "Loamy soil is perfect for vegetables. Focus on micronutrient management.",
    },
  },
  Fruits: {
    Clayey: {
      recs: [
        "Ammonium Sulphate – Safe slow-release N for fruit trees",
        "Bone Meal Phosphate – Long-term phosphorus for clay orchards",
        "Gypsum – 200 kg/acre for calcium and drainage in clay",
        "Avoid NPK complexes with high K in poorly-drained clay",
      ],
      note: "Drainage improvement is critical before planting fruit orchards in clay.",
    },
    Sandy: {
      recs: [
        "Controlled-Release Fertilizer Granules – Reduces leaching",
        "Potassium Sulphate – Superior to MOP for fruit quality in sand",
        "Organic Compost – 5 tonnes/acre to build sandy orchard soil",
        "Zinc Sulphate foliar spray – Corrects common sandy-soil zinc deficiency",
      ],
      note: "Build organic matter aggressively in sandy soil orchards for sustained yields.",
    },
    Loamy: {
      recs: [
        "NPK 15-15-15 – Quarterly application for established trees",
        "Micronutrient Grade – Fe, Zn, Mn, B spray at flowering",
        "FYM/Compost – 10 kg per tree annually",
        "Sulphur 90% WG – Dual action for fungal control and pH adjustment",
      ],
      note: "Loamy soil gives excellent fruit quality. Micronutrient management is key.",
    },
  },
  "Sugarcane": {
    Clayey: {
      recs: [
        "Urea – 4 bags/acre split over 3 applications",
        "Single Super Phosphate – 2 bags/acre as basal",
        "Trash Mulching + Compost – Improves clay structure in ratoon crop",
        "Potash MOP – 2 bags/acre for juice quality",
      ],
      note: "Sugarcane in clay needs careful water management to avoid waterlogging.",
    },
    Sandy: {
      recs: [
        "Neem-coated Urea – Reduces N loss in sandy soil for sugarcane",
        "DAP + Potash at planting for early establishment",
        "Green Manuring with Dhaincha – Fix N and improve sandy structure",
        "Humic Acid soil drench – Increases CEC of sandy soil",
      ],
      note: "Sandy sugarcane plots need frequent light irrigation and split fertilization.",
    },
    Loamy: {
      recs: [
        "NPK 20-20-0 – 2 bags/acre as basal dose",
        "Urea – 3 bags/acre split at earthing-up stages",
        "Potash MOP – 2 bags/acre at grand growth period",
        "Pressmud Compost – 5 tonnes/acre for high-brix juice quality",
      ],
      note: "Loamy soils are ideal for sugarcane — maximum yield with balanced NPK.",
    },
  },
};
