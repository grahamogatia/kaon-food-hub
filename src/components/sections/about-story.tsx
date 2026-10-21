import { siteConfig } from "@/lib/site";
import logoSrc from "@/assets/logo.png";
import fiestaSrc from "@/assets/about/fiesta.jpg";
import pistaBg from "@/assets/pistafoodbg.png";

export function AboutStory() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top banner placeholder */}
        <div className="relative mb-16 flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 sm:h-80">
          <img src={fiestaSrc} alt="Fiesta banners" className="absolute inset-0 h-full w-full object-cover opacity-80" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-fiesta-red via-fiesta-yellow to-fiesta-green" />
        </div>

        {/* Mission */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-fiesta-green">
            Our Mission
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Every Meal, A Fiesta!
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Affordable, authentic Filipino food made with heart — for every meal, every occasion.
          </p>
        </div>

        {/* Story section */}
        <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-fiesta-yellow">
              Since 2025
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Our Story
            </h1>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                {siteConfig.name} started as a small food delivery business by three fraternity 
                brothers, united by strong brotherhood and a passion for Filipino food. Today, 
                we serve flavorful, home-style dishes that bring the spirit of a fiesta to 
                every table.
              </p>
            </div>
          </div>

          {/* Side image placeholder */}
          <div className="flex items-center justify-center">
            <img
              src={pistaBg}
              alt="Crispy Pata"
              className="aspect-[4/3] w-full max-h-72 sm:max-h-96 rounded-xl object-cover"
              style={{ objectFit: 'cover', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
