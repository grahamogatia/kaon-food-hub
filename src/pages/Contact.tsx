import { SEO } from "@/components/seo";
import { ContactCard } from "@/components/sections/contact-card";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Pista Central Express. Visit our branches in Rizal, Caloocan, and Pasig or reach out online."
        path="/contact"
      />
      <ContactCard />
    </>
  );
}
