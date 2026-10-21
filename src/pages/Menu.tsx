import { SEO } from "@/components/seo";
import { MenuGrid } from "@/components/sections/menu-grid";

export default function MenuPage() {
  return (
    <>
      <SEO
        title="Menu"
        description="Browse our full menu — ulam bundles, boodle trays, and ala carte Filipino favorites. Order online for delivery or pickup."
        path="/menu"
      />
      <MenuGrid />
    </>
  );
}
