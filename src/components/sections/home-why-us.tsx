import { siteConfig } from "@/lib/site";

export function HomeWhyUs() {
  return (
    <section className="border-t border-border/40 bg-neutral-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-fiesta-green">
            The Pista Experience
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose Us
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-fiesta-yellow/15 text-2xl">
                {f.icon}
              </div>
              <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: "🔥",
    title: "Cooked Fresh Daily",
    description:
      "Every dish is prepared fresh using time-honored Filipino recipes and the finest local ingredients.",
  },
  {
    icon: "⚡",
    title: "Fast & Convenient",
    description:
      `Skip the wait. ${siteConfig.name} serves authentic fiesta food with express-lane speed.`,
  },
  {
    icon: "🎉",
    title: "Fiesta In Every Bite",
    description:
      "From our crispy pata to our BBQ, every plate carries the joy and warmth of a Filipino celebration.",
  },
];
