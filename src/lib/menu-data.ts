import ulam2 from "@/assets/menu/ulam-bundles/ulam2bundle.jpg";
import ulam3 from "@/assets/menu/ulam-bundles/ulam3bundle.jpg";
import ulam4 from "@/assets/menu/ulam-bundles/ulam4bundle.jpg";
import ulam5 from "@/assets/menu/ulam-bundles/ulam5bundle.jpg";
import ulam5belly from "@/assets/menu/ulam-bundles/ulam5bundlewbelly.jpg";
import ulam6 from "@/assets/menu/ulam-bundles/ulam6bundle.jpg";
import ulam7 from "@/assets/menu/ulam-bundles/ulam7bundle.jpg";
import ulam8 from "@/assets/menu/ulam-bundles/ulam8bundle.jpg";
import ulam10 from "@/assets/menu/ulam-bundles/ulam10bundle.jpg";
import boodleMega from "@/assets/menu/boodle/boodlebilaomega.jpg";
import boodleBarkada from "@/assets/menu/boodle/boodlebilaobarkada.jpg";
import boodleParty from "@/assets/menu/boodle/boodlebilaoparty.jpg";
import boodleCelebrity from "@/assets/menu/boodle/boodletraycelebrity.jpg";
import boodle3Footer from "@/assets/menu/boodle/boodletray3footer.jpg";
import boodle3FooterExtra from "@/assets/menu/boodle/boodletray3footerextra.jpg";
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

export type MenuType = "ulam-bundles" | "boodle" | "ala-carte";

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
  // ── Ulam Bundles ──────────────────────────
  {
    id: "2-ulam-bundle",
    type: "ulam-bundles",
    name: "2 Ulam Bundle",
    items: ["Crispy Pata (800g–1kg)", "Pansit 12\""],
    price: 999,
    pax: "4–6",
    image: ulam2,
  },
  {
    id: "3-ulam-bundle",
    type: "ulam-bundles",
    name: "3 Ulam Bundle",
    items: ["Pork Shanghai (15 pcs)", "Crispy Pata (800g–1kg)", "Pansit 12\""],
    price: 1150,
    pax: "8–10",
    image: ulam3,
  },
  {
    id: "4-ulam-bundle",
    type: "ulam-bundles",
    name: "4 Ulam Bundle",
    items: ["Pork Shanghai (15 pcs)", "Crispy Pata (800g–1kg)", "Pansit 12\"", "Fried Chicken (8 pcs)"],
    price: 1550,
    pax: "10–12",
    image: ulam4,
  },
  {
    id: "5-ulam-bundle",
    type: "ulam-bundles",
    name: "5 Ulam Bundle",
    items: ["Pork Shanghai (15 pcs)", "Crispy Pata (800g–1kg)", "Pansit 12\"", "Jumbo Siomai (10 pcs)", "Whole Chicken (800g–1kg)"],
    price: 1650,
    pax: "12–15",
    image: ulam5,
  },
  {
    id: "5-ulam-bundle-belly",
    type: "ulam-bundles",
    name: "5 Ulam w/ Belly",
    items: ["Crispy Pata (800g–1kg)", "Pork Belly (800g–1kg)", "Whole Chicken (800g–1kg)", "Cheesy Bangus (3 pcs)", "Pork Shanghai (30 pcs)"],
    price: 1998,
    pax: "12–15",
    image: ulam5belly,
  },
  {
    id: "6-ulam-bundle",
    type: "ulam-bundles",
    name: "6 Ulam Bundle",
    items: ["Pork Shanghai (25 pcs)", "Crispy Pata (800g–1kg)", "Jumbo Siomai (25 pcs)", "Pork BBQ (12 pcs)", "Classic Bangus (3 pcs)", "Whole Chicken (800g–1kg)"],
    price: 2050,
    pax: "15–18",
    image: ulam6,
  },
  {
    id: "7-ulam-bundle",
    type: "ulam-bundles",
    name: "7 Ulam Bundle",
    items: ["Pork Shanghai (25 pcs)", "Jumbo Siomai (25 pcs)", "Pansit 12\"", "Crispy Pata (800g–1kg)", "Pork BBQ (12 pcs)", "Classic Bangus (3 pcs)", "Whole Chicken (800g–1kg)"],
    price: 2350,
    pax: "18–20",
    image: ulam7,
  },
  {
    id: "8-ulam-bundle",
    type: "ulam-bundles",
    name: "8 Ulam Bundle",
    items: ["Shrimp Tempura (15 pcs)", "Pork BBQ (12 pcs)", "Classic Bangus (3 pcs)", "Pansit 12\"", "Crispy Pata (800g–1kg)", "Whole Chicken (800g–1kg)", "Pork Shanghai (25 pcs)", "Jumbo Siomai (25 pcs)"],
    price: 2550,
    pax: "20–25",
    image: ulam8,
    badge: "Best Seller",
  },
  {
    id: "10-ulam-bundle",
    type: "ulam-bundles",
    name: "10 Ulam Bundle",
    items: ["Shrimp Tempura (15 pcs)", "Pork BBQ (12 pcs)", "Spaghetti 12\"", "Pansit 12\"", "Double Crispy Pata (800g–1kg)", "Whole Chicken (800g–1kg)", "Pork Shanghai (20 pcs)", "Classic Bangus (3 pcs)", "Jumbo Siomai (20 pcs)"],
    price: 3050,
    pax: "25–30",
    image: ulam10,
  },

  // ── Boodle ────────────────────────────────
  {
    id: "mega-boodle",
    type: "boodle",
    name: "Mega Boodle (Bilao)",
    items: ["5 Cups of Rice", "10 pcs Jumbo Siomai", "1 Whole Chicken", "1 Fried Bangus", "25 pcs Shanghai"],
    price: 1200,
    pax: "4–5",
    image: boodleMega,
  },
  {
    id: "barkada-boodle",
    type: "boodle",
    name: "Barkada Boodle (Bilao)",
    items: ["8 Cups of Rice", "10 pcs Jumbo Siomai", "1 Whole Chicken", "1 Fried Bangus", "30 pcs Shanghai", "10 pcs Pork BBQ", "Crispy Pata"],
    price: 1699,
    pax: "8–10",
    image: boodleBarkada,
  },
  {
    id: "party-boodle",
    type: "boodle",
    name: "Party Boodle (Bilao)",
    items: ["12 Cups of Rice", "15 pcs Jumbo Siomai", "1 Whole Chicken", "1 Fried Bangus", "30 pcs Shanghai", "15 pcs Pork BBQ", "1 Crispy Pata", "1 Small Pansit"],
    price: 2200,
    pax: "12–15",
    image: boodleParty,
  },
  {
    id: "celebrity-boodle-tray",
    type: "boodle",
    name: "Celebrity Boodle Tray",
    items: ["Crispy Pata (Free)", "15 pcs Shanghai", "2 Classic Bangus", "1 Cheesy Bangus", "Whole Fried Chicken", "10 pcs Pork BBQ", "Medium Size Pancit", "8 Cups of Rice"],
    price: 2400,
    pax: "10–12",
    image: boodleCelebrity,
    badge: "Free Crispy Pata",
  },
  {
    id: "3-footer-boodle-tray",
    type: "boodle",
    name: "3 Footer Boodle Tray",
    items: ["Pork Belly", "Crispy Pata", "Whole Fried Chicken", "15 pcs Pork BBQ", "3 Classic Bangus", "10 Cups of Rice", "Red Egg", "Talong", "Tomato"],
    price: 3500,
    pax: "12–15",
    image: boodle3Footer,
  },
  {
    id: "3-footer-boodle-tray-extra",
    type: "boodle",
    name: "3 Footer Boodle Tray Extra",
    items: ["Pork Belly", "Crispy Pata", "Whole Fried Chicken", "30 pcs Shanghai", "20 pcs Pork BBQ", "5 Classic Bangus", "15 Cups of Rice", "Red Egg", "Talong", "Tomato"],
    price: 4500,
    pax: "15–20",
    image: boodle3FooterExtra,
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
  { value: "ulam-bundles", label: "Ulam Bundles" },
  { value: "boodle", label: "Boodle" },
  { value: "ala-carte", label: "Ala Carte" },
] as const;
