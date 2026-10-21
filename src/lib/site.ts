export const siteConfig = {
  name: "Kaon Food Hub",
  tagline: "Every Meal, A Fiesta!",
  description:
    "From beloved Filipino classics to bold new flavors, every dish at Pista Central Express is a celebration of heritage — served fresh, fast, and with fiesta spirit.",
  branches: ["Rizal", "Caloocan", "Pasig"] as const,
  social: {
    facebook: "https://facebook.com/pistacentralexpress",
  },
  contact: {
    phone: "(02) 8123-4567",
    mobile: "0917 832 6372",
    email: "hello@pistacentralexpress.ph",
    address: "123 Fiesta Avenue, Marikina City, Metro Manila, Philippines",
  },
} as const;

export type Branch = (typeof siteConfig.branches)[number];
