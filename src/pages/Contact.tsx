import { SEO } from "@/components/seo";
import { ContactCard } from "@/components/sections/contact-card";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Kaon Food Hub. Visit our branches in Rizal, Caloocan, and Pasig or reach out online."
        path="/contact"
      />
      <ContactCard />
    </>
  );
}
