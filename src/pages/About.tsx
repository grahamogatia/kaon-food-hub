import { SEO } from "@/components/seo";
import { AboutStory } from "@/components/sections/about-story";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Kaon Food Hub — our story, mission, and passion for authentic Filipino cuisine served fresh and fast."
        path="/about"
      />
      <AboutStory />
    </>
  );
}
