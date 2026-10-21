import { Link } from "react-router-dom";
import { menuItems, menuTypes, type MenuItem } from "@/lib/menu-data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const featured = menuItems.filter((item) => item.badge);

const typeEmoji: Record<string, string> = {
  "ulam-bundles": "🍱",
  boodle: "🥘",
  "ala-carte": "🍽️",
};

export function HomeFeatured() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-fiesta-green">
            Our Specialties
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Menu Items
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Crowd favorites from our fiesta table — made with love and
            generations of Filipino tradition.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item) => (
            <FeaturedCard key={item.id} item={item} />
          ))}
        </div>

        {/* See full menu */}
        <div className="mt-14 text-center">
          <Link to="/menu">
            <Button variant="outline" size="lg" className="px-8 text-sm shadow-sm hover:shadow-md">
              See Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ item }: { item: MenuItem }) {
  const emoji = typeEmoji[item.type] ?? "🍽️";
  const typeLabel = menuTypes.find((t) => t.value === item.type)?.label ?? item.type;

  return (
    <Card className="group relative flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
      {/* Image */}
      {item.image ? (
        <img
          src={item.image}
          alt={item.name}
          className="aspect-[1.91/1] w-full object-cover"
        />
      ) : (
        <div className="flex aspect-[1.91/1] w-full items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-50">
          <span className="text-4xl">{emoji}</span>
        </div>
      )}

      {item.badge && (
        <Badge className="absolute top-3 right-3 border-0 bg-fiesta-yellow text-xs text-neutral-900">
          {item.badge}
        </Badge>
      )}

      <CardHeader className="pb-1">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-fiesta-orange">
          {typeLabel}
        </p>
        <CardTitle className="text-base font-semibold">{item.name}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col justify-between gap-3">
        <ul className="space-y-1">
          {item.items.map((entry, i) => (
            <li key={i} className="text-xs leading-relaxed text-muted-foreground line-clamp-1">
              {entry}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <p className="text-lg font-bold text-fiesta-green">₱{item.price.toLocaleString()}</p>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Users className="size-3" />
            {item.pax} pax
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
