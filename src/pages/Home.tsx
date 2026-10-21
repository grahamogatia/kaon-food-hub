import { SEO } from "@/components/seo";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeFeatured } from "@/components/sections/home-featured";
import { HomeWhyUs } from "@/components/sections/home-why-us";

export default function HomePage() {
  return (
    <>
      <SEO path="/" />
      <HomeHero />
      <HomeFeatured />
      <HomeWhyUs />
    </>
  );
}
