import crispy_pata from "@/assets/menu/promos/crispy_pata.jpg";
import pork_belly from "@/assets/menu/promos/pork_belly.jpg";
import salo1 from "@/assets/menu/promos/salo1.jpg";
import salo2 from "@/assets/menu/promos/salo2.jpg";
import salo3 from "@/assets/menu/promos/salo3.jpg";
import salo4 from "@/assets/menu/promos/salo4.jpg";
import salo5 from "@/assets/menu/promos/salo5.jpg";
import salo6 from "@/assets/menu/promos/salo6.jpg";
import salo7 from "@/assets/menu/promos/salo7.jpg";
import salo8 from "@/assets/menu/promos/salo8.jpg";
import salo9 from "@/assets/menu/promos/salo9.jpg";
import boodleFight from "@/assets/menu/boodle/boodle_fight.jpg";
import boodleTray from "@/assets/menu/boodle/boodle_tray.jpg";

import acPansit from "@/assets/menu/ala-carte/pansit.jpg";
import acPalabok from "@/assets/menu/ala-carte/palabok.jpg";
import acCarbonara from "@/assets/menu/ala-carte/carbonara.jpg";
import acSpaghetti from "@/assets/menu/ala-carte/spaghetti.jpg";
import acJumboSiomai from "@/assets/menu/ala-carte/jumbosiomai.jpg";
import acPorkShanghai from "@/assets/menu/ala-carte/porkshanghai.jpg";
import acPorkBBQ from "@/assets/menu/ala-carte/porkbbq.jpg";
import acFriedChicken from "@/assets/menu/ala-carte/friedchicken.jpg";
import acWholeChicken from "@/assets/menu/ala-carte/wholefriedchicken.jpg";
import acBangus from "@/assets/menu/ala-carte/bangus.jpg";
import acCheesyBangus from "@/assets/menu/ala-carte/cheesybangus.jpg";
import acCrispyPata from "@/assets/menu/ala-carte/crispypata.jpg";
import acPorkBelly from "@/assets/menu/ala-carte/porkbelly.jpg";
import acPorkBellyBuy2 from "@/assets/menu/ala-carte/porkbellybuy2promo.jpg";
import acPorkBellyBuy3 from "@/assets/menu/ala-carte/porkbellybuy3promo.jpg";
import acShrimpTempura from "@/assets/menu/ala-carte/shrimptempura.jpg";

export type MenuType = "promos" | "boodle" | "ala-carte";

export interface PaxOption {
  label: string;
  price: number;
}

export interface MenuItem {
  id: string;
  type: MenuType;
  name: string;
  items: string[];
  price: number;
  pax: string;
  image?: string;
  badge?: string;
  paxOptions?: PaxOption[];
}

// ────────────────────────────────────────────
// Add new items here — just append to the array
// ────────────────────────────────────────────

export const menuItems: MenuItem[] = [
  // ── Promos ──────────────────────────
  {
    id: "crispy-pata-promo",
    type: "promos",
    name: "Crispy Pata Promo",
    items: ["Crispy Pata (800g–1kg)"],
    price: 699,
    pax: "3-4 pax per pc",
    image: crispy_pata,
    paxOptions: [
      { label: "Crispy Pata (1 pc)", price: 699 },
      { label: "Buy 2 Promo", price: 899 },
      { label: "Buy 3 Promo", price: 1350 },
    ],
    badge: "Promo"
  },
  {
    id: "pork-belly-promo",
    type: "promos",
    name: "Pork Belly Promo",
    items: ["Pork Belly (800g–1kg)"],
    price: 899,
    pax: "3-4 pax per pc",
    image: pork_belly,
    paxOptions: [
      { label: "Pork Belly (1 pc)", price: 899 },
      { label: "Buy 2 Promo (with Free Spaghetti)", price: 1699 },
      { label: "Buy 3 Promo (with Free Whole Chicken)", price: 2599 },
    ],
    badge: "Promo"
  },
  {
    id: "salo-salo1-promo",
    type: "promos",
    name: "Salo-Salo 1",
    items: ["Crispy Pata (800g to 1kg)", "Spaghetti"],
    price: 999,
    pax: "4-6 pax",
    image: salo1,
  },
  {
    id: "salo-salo2-promo",
    type: "promos",
    name: "Salo-Salo 2",
    items: ["Crispy Pata (800g to 1kg)", "Spaghetti", "Pork Shanghai (15 pcs)"],
    price: 1150,
    pax: "8-10 pax",
    image: salo2,
  },
  {
    id: "salo-salo3-promo",
    type: "promos",
    name: "Salo-Salo 3",
    items: ["Crispy Pata (800g to 1kg)", "Spaghetti", "Pork Shanghai (15 pcs)", "Fried Chicken (8pcs)"],
    price: 1550,
    pax: "10-12 pax",
    image: salo3,
  },
  {
    id: "salo-salo4-promo",
    type: "promos",
    name: "Salo-Salo 4",
    items: ["Crispy Pata (800g to 1kg)", "Pork Shanghai (30 pcs)", "Pork Belly (800g to 1kg)", "Whole Chicken (800g to 1kg)", "Cheesy Bangus (3pcs)"],
    price: 1998,
    pax: "12-15 pax",
    image: salo4,
  },
  {
    id: "salo-salo5-promo",
    type: "promos",
    name: "Salo-Salo 5",
    items: ["Crispy Pata (800g to 1kg)", "Pork Shanghai (15 pcs)", "Jumbo Siomai (10 pcs)", "Spaghetti (12\")", "Whole Chicken (800g to 1kg)"],
    price: 1650,
    pax: "12-15 pax",
    image: salo5,
  },
  {
    id: "salo-salo6-promo",
    type: "promos",
    name: "Salo-Salo 6",
    items: ["Crispy Pata (800g to 1kg)", "Pork Shanghai (25 pcs)", "Jumbo Siomai (25 pcs)", "Pork BBQ (12 pcs)", "Classic Bangus (3 pcs)", "Whole Chicken (800g to 1kg)"],
    price: 2050,
    pax: "15-18 pax",
    image: salo6,
  },
  {
    id: "salo-salo7-promo",
    type: "promos",
    name: "Salo-Salo 7",
    items: ["Crispy Pata (800g to 1kg)", "Pork Shanghai (25 pcs)", "Jumbo Siomai (25 pcs)", "Spaghetti (5 to 7 pax)", "Pork BBQ (12 pcs)", "Classic Bangus (3 pcs)", "Whole Chicken (800g to 1kg)"],
    price: 2350,
    pax: "18-20 pax",
    image: salo7,
  },
  {
    id: "salo-salo8-promo",
    type: "promos",
    name: "Salo-Salo 8",
    items: ["Crispy Pata (800g to 1kg)", "Pork Shanghai (25 pcs)", "Jumbo Siomai (25 pcs)", "Spaghetti (5 to 7 pax)", "Pork BBQ (12 pcs)", "Classic Bangus (3 pcs)", "Whole Chicken (800g to 1kg)", "Shrimp Tempura (15 pcs)"],
    price: 2550,
    pax: "20-25 pax",
    image: salo8,
  },
  {
    id: "salo-salo9-promo",
    type: "promos",
    name: "Salo-Salo 9",
    items: ["Crispy Pata (800g to 1kg)", "Pork Shanghai (20 pcs)", "Jumbo Siomai (20 pcs)", "Carbonara (5 to 7 pax)", "Spaghetti (5 to 7 pax)", "Pork BBQ (12 pcs)", "Classic Bangus (3 pcs)", "Whole Chicken (800g to 1kg)", "Shrimp Tempura (15 pcs)"],
    price: 3050,
    pax: "25-30 pax",
    image: salo9,
  },


  // ── Boodle ────────────────────────────────
  {
    id: "boodle-fight",
    type: "boodle",
    name: "Boodle Fight",
    items: ["Mega Boodle (4-5 pax)", "Barkada Boodle (8-10 pax)", "Party Boodle (12-15 pax)"],
    price: 1200,
    pax: "from 4-5 pax",
    image: boodleFight,
    paxOptions: [
      { label: "Mega Boodle (4-5 pax)", price: 1200 },
      { label: "Buy 2 Promo (with Free Spaghetti)", price: 1699 },
      { label: "Buy 3 Promo (with Free Whole Chicken)", price: 2200 },
    ],
  },
  {
    id: "boodle-tray",
    type: "boodle",
    name: "Boodle Tray",
    items: ["Celebrity Boodle Tray (10-12 pax)", "3 Footer Boodle Tray (12-15 pax)", "Mega Boodle Tray (15-20 pax)"],
    price: 2400,
    pax: "from 10-12 pax",
    image: boodleTray,
    paxOptions: [
      { label: "Celebrity Boodle Tray (10-12 pax)", price: 2400 },
      { label: "3 Footer Boodle Tray (12-15 pax)", price: 3500 },
      { label: "Mega Boodle Tray (15-20 pax)", price: 4500 },
    ],
  },

  // ── Ala Carte ─────────────────────────────
  {
    id: "ac-pansit",
    type: "ala-carte",
    name: "Pansit",
    items: ["Classic Filipino noodle dish"],
    price: 599,
    pax: "5–25",
    image: acPansit,
    paxOptions: [
      { label: "5–7 pax", price: 599 },
      { label: "8–12 pax", price: 800 },
      { label: "16–20 pax", price: 1500 },
      { label: "21–25 pax", price: 1700 },
    ],
  },
  {
    id: "ac-palabok",
    type: "ala-carte",
    name: "Palabok",
    items: ["Rice noodles with savory shrimp sauce"],
    price: 599,
    pax: "5–25",
    image: acPalabok,
    paxOptions: [
      { label: "5–7 pax", price: 599 },
      { label: "8–12 pax", price: 800 },
      { label: "16–20 pax", price: 1500 },
      { label: "21–25 pax", price: 1700 },
    ],
  },
  {
    id: "ac-carbonara",
    type: "ala-carte",
    name: "Carbonara",
    items: ["Creamy Filipino-style carbonara"],
    price: 599,
    pax: "5–25",
    image: acCarbonara,
    paxOptions: [
      { label: "5–7 pax", price: 599 },
      { label: "8–12 pax", price: 800 },
      { label: "16–20 pax", price: 1500 },
      { label: "21–25 pax", price: 1700 },
    ],
  },
  {
    id: "ac-spaghetti",
    type: "ala-carte",
    name: "Spaghetti",
    items: ["Sweet-style Filipino spaghetti"],
    price: 599,
    pax: "5–25",
    image: acSpaghetti,
    paxOptions: [
      { label: "5–7 pax", price: 599 },
      { label: "8–12 pax", price: 800 },
      { label: "16–20 pax", price: 1500 },
      { label: "21–25 pax", price: 1700 },
    ],
  },
  {
    id: "ac-jumbo-siomai",
    type: "ala-carte",
    name: "Jumbo Siomai",
    items: ["Steamed pork dumplings"],
    price: 390,
    pax: "30–50 pcs",
    image: acJumboSiomai,
    paxOptions: [
      { label: "30 pcs", price: 390 },
      { label: "50 pcs", price: 650 },
    ],
  },
  {
    id: "ac-pork-shanghai",
    type: "ala-carte",
    name: "Pork Shanghai",
    items: ["Crispy fried spring rolls"],
    price: 350,
    pax: "30–50 pcs",
    image: acPorkShanghai,
    paxOptions: [
      { label: "30 pcs", price: 350 },
      { label: "50 pcs", price: 600 },
    ],
  },
  {
    id: "ac-pork-bbq",
    type: "ala-carte",
    name: "Pork BBQ",
    items: ["Sweet & savory grilled pork skewers"],
    price: 900,
    pax: "30–50 pcs",
    image: acPorkBBQ,
    paxOptions: [
      { label: "30 pcs", price: 900 },
      { label: "50 pcs", price: 1450 },
    ],
  },
  {
    id: "ac-fried-chicken",
    type: "ala-carte",
    name: "Fried Chicken",
    items: ["25 pieces of golden fried chicken"],
    price: 799,
    pax: "25 pcs",
    image: acFriedChicken,
  },
  {
    id: "ac-whole-fried-chicken",
    type: "ala-carte",
    name: "Whole Fried Chicken",
    items: ["Whole fried chicken (800g–1kg)"],
    price: 350,
    pax: "1 pc",
    image: acWholeChicken,
  },
  {
    id: "ac-classic-bangus",
    type: "ala-carte",
    name: "Classic Boneless Bangus",
    items: ["Boneless milkfish, fried to perfection"],
    price: 180,
    pax: "1 pc",
    image: acBangus,
  },
  {
    id: "ac-cheesy-bangus",
    type: "ala-carte",
    name: "Cheesy Boneless Bangus",
    items: ["Boneless milkfish with melted cheese"],
    price: 200,
    pax: "1 pc",
    image: acCheesyBangus,
  },
  {
    id: "ac-crispy-pata",
    type: "ala-carte",
    name: "Crispy Pata",
    items: ["Deep-fried pork knuckle"],
    price: 699,
    pax: "1–3 pcs",
    image: acCrispyPata,
    paxOptions: [
      { label: "1 pc", price: 699 },
      { label: "Buy 2 Promo", price: 899 },
      { label: "Buy 3 Promo", price: 1350 },
    ],
  },
  {
    id: "ac-pork-belly",
    type: "ala-carte",
    name: "Pork Belly",
    items: ["Crispy pork belly (800g–1kg)"],
    price: 899,
    pax: "1 pc",
    image: acPorkBelly,
  },
  {
    id: "ac-pork-belly-buy2",
    type: "ala-carte",
    name: "Pork Belly Buy 2 Promo",
    items: ["2x Pork Belly (800g–1kg)", "Free Pansit"],
    price: 1699,
    pax: "2 pcs",
    image: acPorkBellyBuy2,
    badge: "Promo",
  },
  {
    id: "ac-pork-belly-buy3",
    type: "ala-carte",
    name: "Pork Belly Buy 3 Promo",
    items: ["3x Pork Belly (800g–1kg)", "Free Whole Fried Chicken"],
    price: 2599,
    pax: "3 pcs",
    image: acPorkBellyBuy3,
    badge: "Promo",
  },
  {
    id: "ac-shrimp-tempura",
    type: "ala-carte",
    name: "Shrimp Tempura",
    items: ["30 pieces of crispy shrimp tempura"],
    price: 799,
    pax: "30 pcs",
    image: acShrimpTempura,
  },
];

export const menuTypes = [
  { value: "all", label: "All Items" },
  { value: "promos", label: "Promos" },
  { value: "boodle", label: "Boodle" },
  { value: "ala-carte", label: "Ala Carte" },
] as const;
