import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import logoSrc from "@/assets/logo.png";
import heroBg from "@/assets/pistafoodbg.png";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center sm:py-32 lg:py-40">
        {/* Logo mark */}
        <img
          src={logoSrc}
          alt=""
          className="mb-8 h-28 w-28 object-contain sm:h-36 sm:w-36"
        />

        {/* Headline */}
        <h1 className="font-harabara max-w-3xl text-5xl leading-none tracking-tight [word-spacing:-0.25em] sm:text-6xl lg:text-7xl">
          {siteConfig.name}
        </h1>

        {/* Tagline */}
        <p className="mt-4 max-w-xl text-lg text-neutral-300 sm:text-xl">
          {siteConfig.tagline}
        </p>

        {/* Description */}
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-400">
          {siteConfig.description}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link to="/menu">
            <Button
              size="lg"
              className="bg-fiesta-red px-8 text-sm font-semibold text-white shadow-lg shadow-fiesta-red/25 hover:bg-fiesta-red/90 hover:shadow-xl hover:shadow-fiesta-red/30"
            >
              View Menu
            </Button>
          </Link>
          <Link to="/menu">
            <Button
              size="lg"
              className="bg-fiesta-yellow px-8 text-sm font-semibold text-neutral-900 shadow-lg shadow-fiesta-yellow/25 hover:bg-fiesta-yellow/90 hover:shadow-xl hover:shadow-fiesta-yellow/30"
            >
              Order Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
