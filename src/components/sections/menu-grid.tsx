import { useState, useEffect } from "react";
import { menuItems, menuTypes, type MenuItem, type PaxOption } from "@/lib/menu-data";
import { useCart } from "@/lib/cart";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { Check, Plus, Users, UtensilsCrossed } from "lucide-react";

const typeEmoji: Record<string, string> = {
  "promos": "🍱",
  boodle: "🥘",
  "ala-carte": "🍽️",
};

export function MenuGrid() {
  const [activeType, setActiveType] = useState("all");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [paxPickerItem, setPaxPickerItem] = useState<MenuItem | null>(null);
  const [selectedPax, setSelectedPax] = useState<PaxOption | null>(null);
  const { addItem } = useCart();

  const filtered =
    activeType === "all"
      ? menuItems
      : menuItems.filter((item) => item.type === activeType);

  const handleAddFromDialog = () => {
    if (selectedItem) {
      if (selectedItem.paxOptions) {
        setPaxPickerItem(selectedItem);
        setSelectedPax(selectedItem.paxOptions[0]);
        setSelectedItem(null);
      } else {
        addItem(selectedItem);
        setSelectedItem(null);
      }
    }
  };

  const handleAddWithPax = () => {
    if (paxPickerItem && selectedPax) {
      addItem({ ...paxPickerItem, price: selectedPax.price, pax: selectedPax.label });
      setPaxPickerItem(null);
      setSelectedPax(null);
    }
  };

  const handleCardAdd = (item: MenuItem) => {
    if (item.paxOptions) {
      setPaxPickerItem(item);
      setSelectedPax(item.paxOptions[0]);
    } else {
      addItem(item);
    }
  };

  const typeLabel = selectedItem
    ? menuTypes.find((t) => t.value === selectedItem.type)?.label ?? selectedItem.type
    : "";
  const emoji = selectedItem ? (typeEmoji[selectedItem.type] ?? "🍽️") : "";

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-fiesta-green">
            Explore Our Offerings
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Our Menu
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            A feast for every occasion. All prices in Philippine Peso (₱).
          </p>
        </div>

        {/* Type tabs */}
        <Tabs
          value={activeType}
          onValueChange={setActiveType}
          className="mt-10"
        >
          <TabsList className="mx-auto flex w-full max-w-full gap-1 overflow-x-auto">
            {menuTypes.map((t) => (
              <TabsTrigger key={t.value} value={t.value} className="text-xs">
                {t.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} onSelect={setSelectedItem} onAdd={handleCardAdd} />
          ))}
        </div>
      </div>

      {/* Item detail dialog */}
      <AlertDialog open={!!selectedItem} onOpenChange={(open) => { if (!open) setSelectedItem(null); }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-lg font-semibold">
              {selectedItem?.name}
            </AlertDialogTitle>
            <AlertDialogDescription className="sr-only">
              Details for {selectedItem?.name}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <Card className="border-0 ring-0 shadow-none p-0">
            {/* Image */}
            {selectedItem?.image ? (
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full rounded-md object-cover aspect-[1080/835]"
              />
            ) : (
              <div className="flex w-full items-center justify-center rounded-md bg-gradient-to-br from-neutral-100 to-neutral-50 aspect-[1.91/1]">
                <span className="text-5xl">{emoji}</span>
              </div>
            )}

            {/* Fiesta ribbon */}
            <div className="h-1 w-full bg-gradient-to-r from-fiesta-red via-fiesta-yellow to-fiesta-green rounded-full mt-3" />

            <CardHeader className="px-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-fiesta-orange">
                    {typeLabel}
                  </p>
                  <CardTitle className="mt-0.5 text-base font-semibold">
                    {selectedItem?.name}
                  </CardTitle>
                </div>
                {selectedItem?.badge && (
                  <Badge className="shrink-0 border-0 bg-fiesta-red text-xs font-bold text-white">
                    {selectedItem.badge}
                  </Badge>
                )}
              </div>
            </CardHeader>

            <CardContent className="flex flex-col gap-4 px-0">
              {/* Items included */}
              <ul className="space-y-1">
                {selectedItem?.items.map((entry, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                    <span className="mt-1 block size-1 shrink-0 rounded-full bg-fiesta-green" />
                    {entry}
                  </li>
                ))}
              </ul>

              {/* Price + Pax */}
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-fiesta-green">
                  ₱{selectedItem?.price.toLocaleString()}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  {selectedItem?.pax.includes("pc") ? (
                    <UtensilsCrossed className="size-3" />
                  ) : (
                    <Users className="size-3" />
                  )}
                  {selectedItem?.pax}{!selectedItem?.pax.includes("pc") && " pax"}
                </span>
              </div>
            </CardContent>
          </Card>

          <AlertDialogFooter>
            <Button variant="outline" onClick={() => setSelectedItem(null)}>
              Close
            </Button>
            <Button
              className="bg-fiesta-yellow text-neutral-900 hover:bg-fiesta-yellow/85"
              onClick={handleAddFromDialog}
            >
              <Plus className="size-3 mr-1" />
              Add To Cart
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Pax selection dialog */}
      <AlertDialog open={!!paxPickerItem} onOpenChange={(open) => { if (!open) { setPaxPickerItem(null); setSelectedPax(null); } }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-lg font-semibold">
              {paxPickerItem?.name}
            </AlertDialogTitle>
            <AlertDialogDescription>
              Select a size to add to cart.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="flex flex-col gap-2">
            {paxPickerItem?.paxOptions?.map((opt) => (
              <button
                key={opt.label}
                onClick={() => setSelectedPax(opt)}
                className={[
                  "flex items-center justify-between rounded-lg border px-4 py-3 text-sm transition-colors",
                  selectedPax?.label === opt.label
                    ? "border-fiesta-green bg-fiesta-green/10 ring-1 ring-fiesta-green"
                    : "border-border hover:border-fiesta-yellow/60",
                ].join(" ")}
              >
                <span className="font-medium">{opt.label}</span>
                <span className="font-bold text-fiesta-green">₱{opt.price.toLocaleString()}</span>
              </button>
            ))}
          </div>

          <AlertDialogFooter>
            <Button variant="outline" onClick={() => { setPaxPickerItem(null); setSelectedPax(null); }}>
              Cancel
            </Button>
            <Button
              className="bg-fiesta-yellow text-neutral-900 hover:bg-fiesta-yellow/85"
              onClick={handleAddWithPax}
              disabled={!selectedPax}
            >
              <Plus className="size-3 mr-1" />
              Add To Cart — ₱{selectedPax?.price.toLocaleString()}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}

function MenuCard({ item, onSelect, onAdd }: { item: MenuItem; onSelect: (item: MenuItem) => void; onAdd: (item: MenuItem) => void }) {
  const [justAdded, setJustAdded] = useState(false);
  const emoji = typeEmoji[item.type] ?? "🍽️";

  useEffect(() => {
    if (!justAdded) return;
    const t = setTimeout(() => setJustAdded(false), 1200);
    return () => clearTimeout(t);
  }, [justAdded]);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.paxOptions) {
      onAdd(item);
    } else {
      onAdd(item);
      setJustAdded(true);
    }
  };

  const typeLabel = menuTypes.find((t) => t.value === item.type)?.label ?? item.type;

  return (
    <Card
      onClick={() => onSelect(item)}
      className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-xl border-border/60 transition-all duration-300 hover:shadow-lg hover:border-fiesta-yellow/40"
    >
      {/* Image */}
      {item.image ? (
        <img
          src={item.image}
          alt={item.name}
          className="aspect-[1080/835] w-full object-cover"
        />
      ) : (
        <div className="flex aspect-[1.91/1] w-full items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-50">
          <span className="text-5xl">{emoji}</span>
        </div>
      )}

      {/* Fiesta gradient ribbon */}
      <div className="h-1 w-full bg-gradient-to-r from-fiesta-red via-fiesta-yellow to-fiesta-green" />

      <CardHeader className="pb-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-fiesta-orange">
              {typeLabel}
            </p>
            <CardTitle className="mt-0.5 text-base font-semibold">{item.name}</CardTitle>
          </div>
          {item.badge && (
            <Badge className="shrink-0 animate-pulse border-0 bg-fiesta-red text-xs font-bold text-white">
              {item.badge}
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col justify-between gap-4">
        {/* Items included */}
        <ul className="space-y-1">
          {item.items.map((entry, i) => (
            <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
              <span className="mt-1 block size-1 shrink-0 rounded-full bg-fiesta-green" />
              {entry}
            </li>
          ))}
        </ul>

        {/* Price + Pax + Add */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <span className="text-lg font-bold text-fiesta-green">
              {item.paxOptions ? "from " : ""}₱{item.price.toLocaleString()}
            </span>
            <span className="ml-2 inline-flex items-center gap-1 text-xs text-muted-foreground">
              {item.pax.includes("pc") ? (
                <UtensilsCrossed className="size-3" />
              ) : (
                <Users className="size-3" />
              )}
              {item.pax}
            </span>
          </div>
          <button
            onClick={handleAdd}
            disabled={justAdded}
            className={[
              "inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-[11px] font-semibold",
              "transition-colors focus:outline-none focus:ring-2 focus:ring-fiesta-red/40 focus:ring-offset-2",
              justAdded
                ? "bg-fiesta-green text-white"
                : "bg-fiesta-yellow text-neutral-900 hover:bg-fiesta-yellow/85",
            ].join(" ")}
          >
            {justAdded ? (
              <>
                <Check className="size-3" />
                Added!
              </>
            ) : (
              <>
                <Plus className="size-3" />
                Add To Cart
              </>
            )}
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
