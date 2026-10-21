import { useState } from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/site";
import { useCart, type CartItem } from "@/lib/cart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Minus, Plus, Trash2, CheckCircle2 } from "lucide-react";

const branchMessengerMap: Record<string, string> = {
  Rizal: "61580343020737",
  Pasig: "kaonfoodhubpasig",
  Caloocan: "61582210483616",
};

type OrderType = "Delivery" | "Pickup" | "Will Book Own Delivery";
type PaymentMethod = "GCash" | "Bank Transfer" | "COD";

const DELIVERY_FEE = 190;

function buildOrderMessage(
  name: string,
  contact: string,
  orderType: OrderType,
  address: string,
  deliveryDate: string,
  deliveryTime: string,
  paymentMethod: PaymentMethod,
  specialNotes: string,
  items: CartItem[],
  totalPrice: number,
): string {
  const orderLines = items.map((ci, i) => {
    const paxInfo = ci.item.paxOptions ? ` (${ci.item.pax})` : "";
    return `${i + 1}.) ${ci.quantity}x ${ci.item.name}${paxInfo} - ₱${(ci.item.price * ci.quantity).toLocaleString()}`;
  });

  const formattedDate = deliveryDate
    ? new Date(deliveryDate + "T00:00:00").toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  const hasDeliveryFee = orderType === "Delivery";

  const parts = [
    `ORDER FORM`,
    "",
    `Name: ${name}`,
    `Delivery Date: ${formattedDate}`,
    `Delivery Time: ${deliveryTime || "N/A"}`,
    `Contact Number: ${contact}`,
    `Address: ${address}`,
    `Order Type: ${orderType}`,
    `Special Instructions: ${specialNotes.trim() || "None"}`,
    "",
    "Your Order & Amount:",
    ...orderLines,
  ];

  if (hasDeliveryFee) {
    parts.push(`Delivery Fee: ₱${DELIVERY_FEE}.00`);
  }

  parts.push("");
  parts.push(`Total Amount: ₱${totalPrice.toLocaleString()}`);
  parts.push(`Mode of Payment: ${paymentMethod}`);
  parts.push("");
  parts.push("NOTES:");
  parts.push(
    "1) Orders above ₱1,500 – GCash or Bank Transfer required (hirap po mag-book ng rider for COD).",
  );
  parts.push(
    "2) Delivery fee is a fixed rate of ₱190.00, regardless of distance.",
  );
  parts.push(
    "3) Estimated delivery lead time: 2–3 hours (prep to delivery), depending on location and order volume.",
  );
  parts.push(
    "4) No Cancellation Policy: All confirmed orders are final and cannot be cancelled to avoid food waste and preparation losses.",
  );
  parts.push("");
  parts.push("You may also:");
  parts.push("• Arrange for pickup, or");
  parts.push("• Book your own rider");
  parts.push("");
  parts.push("Thank you po!");

  return parts.join("\n");
}

export function OrderPlaceholder() {
  const {
    items,
    totalPrice,
    totalItems,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [branch, setBranch] = useState<string | null>(null);
  const [orderType, setOrderType] = useState<OrderType>("Delivery");
  const [address, setAddress] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("GCash");
  const [specialNotes, setSpecialNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const deliveryFee = orderType === "Delivery" ? DELIVERY_FEE : 0;
  const grandTotal = totalPrice + deliveryFee;

  const canSubmit =
    name.trim() !== "" &&
    contact.trim() !== "" &&
    branch !== null &&
    items.length > 0 &&
    address.trim() !== "" &&
    deliveryDate !== "";

  const handleSubmit = () => {
    if (!canSubmit) return;

    const message = buildOrderMessage(
      name,
      contact,
      orderType,
      address,
      deliveryDate,
      deliveryTime,
      paymentMethod,
      specialNotes,
      items,
      grandTotal,
    );
    const pageUsername = branchMessengerMap[branch!] ?? "kaonfoodhubpasig";
    const url = `https://m.me/${pageUsername}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-md px-6">
          <Alert className="rounded-lg border-fiesta-green/30 bg-fiesta-green/5 p-5">
            <CheckCircle2 className="size-5 text-fiesta-green" />
            <AlertTitle className="text-base font-bold">
              Order Sent Successfully!
            </AlertTitle>
            <AlertDescription className="mt-1 text-sm text-muted-foreground">
              Your order has been copied to your clipboard. Please paste it in
              the Messenger window to send your order to the{" "}
              {branch!} branch.
            </AlertDescription>
          </Alert>
          <div className="mt-6 text-center">
            <Link to="/menu">
              <Button className="bg-fiesta-red text-white hover:bg-fiesta-red/90">
                Back To Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-fiesta-green">
            Checkout
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Place Your Order
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Review your items, fill in your details, and send your order.
          </p>
        </div>

        {/* Branch Selection Gate */}
        {branch === null ? (
          <div className="mx-auto mt-14 max-w-md">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Select a Branch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Choose the branch you'd like to order from to continue.
                </p>
                <div className="grid gap-2">
                  {siteConfig.branches.map((b) => (
                    <Button
                      key={b}
                      variant="outline"
                      className="w-full justify-center text-sm font-medium hover:bg-fiesta-red hover:text-white"
                      onClick={() => setBranch(b)}
                    >
                      {b}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="mx-auto mt-14 grid max-w-4xl gap-8 lg:grid-cols-2">
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Order Summary</CardTitle>
                  {totalItems > 0 && (
                    <span className="text-xs text-muted-foreground">
                      {totalItems} {totalItems === 1 ? "item" : "items"}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {items.length === 0 ? (
                  <div className="rounded-lg border border-dashed border-border bg-muted/30 p-8 text-center">
                    <p className="text-sm font-medium text-muted-foreground">
                      Your cart is empty
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Add items from the menu to get started.
                    </p>
                    <Link to="/menu">
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 text-xs"
                      >
                        Browse Menu
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {items.map((ci) => (
                      <div
                        key={ci.item.id}
                        className="flex items-center justify-between gap-3"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium">
                            {ci.item.name}
                            {ci.item.paxOptions && (
                              <span className="ml-1 text-xs font-normal text-muted-foreground">
                                ({ci.item.pax})
                              </span>
                            )}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            ₱{ci.item.price} each
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() =>
                              updateQuantity(ci.item.id, ci.quantity - 1)
                            }
                            className="inline-flex size-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted"
                          >
                            <Minus className="size-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-semibold">
                            {ci.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(ci.item.id, ci.quantity + 1)
                            }
                            className="inline-flex size-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted"
                          >
                            <Plus className="size-3" />
                          </button>
                        </div>
                        <span className="w-16 text-right text-sm font-semibold text-fiesta-green">
                          ₱{(ci.item.price * ci.quantity).toLocaleString()}
                        </span>
                        <button
                          onClick={() => removeItem(ci.item.id)}
                          className="text-muted-foreground transition-colors hover:text-destructive"
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      </div>
                    ))}
                    <Separator className="my-3" />
                    {orderType === "Delivery" && (
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Delivery Fee</span>
                        <span>₱{DELIVERY_FEE}</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between text-sm font-bold">
                      <span>Total</span>
                      <span className="text-lg text-fiesta-green">
                        ₱{grandTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Customer Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Your Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="order-name">
                    Name <span className="text-fiesta-red">*</span>
                  </Label>
                  <Input
                    id="order-name"
                    placeholder="Juan dela Cruz"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="order-contact">
                    Contact Number <span className="text-fiesta-red">*</span>
                  </Label>
                  <Input
                    id="order-contact"
                    placeholder="09XX XXX XXXX"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>
                    Order Type <span className="text-fiesta-red">*</span>
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {(
                      ["Delivery", "Pickup", "Will Book Own Delivery"] as const
                    ).map((t) => (
                      <Badge
                        key={t}
                        variant={t === orderType ? "default" : "outline"}
                        className={
                          t === orderType
                            ? "cursor-pointer bg-fiesta-red text-white"
                            : "cursor-pointer hover:bg-muted"
                        }
                        onClick={() => setOrderType(t)}
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="order-address">
                    Address <span className="text-fiesta-red">*</span>
                  </Label>
                  <Input
                    id="order-address"
                    placeholder="Full address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="order-date">
                      Delivery Date <span className="text-fiesta-red">*</span>
                    </Label>
                    <Input
                      id="order-date"
                      type="date"
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="order-time">Delivery Time</Label>
                    <Input
                      id="order-time"
                      type="time"
                      value={deliveryTime}
                      onChange={(e) => setDeliveryTime(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>
                    Payment Method <span className="text-fiesta-red">*</span>
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {(["GCash", "Bank Transfer", "COD"] as const).map((m) => (
                      <Badge
                        key={m}
                        variant={m === paymentMethod ? "default" : "outline"}
                        className={
                          m === paymentMethod
                            ? "cursor-pointer bg-fiesta-red text-white"
                            : "cursor-pointer hover:bg-muted"
                        }
                        onClick={() => setPaymentMethod(m)}
                      >
                        {m}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="order-notes">Special Notes</Label>
                  <Input
                    id="order-notes"
                    placeholder="Any special requests or notes"
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Branch</Label>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-fiesta-red text-white">{branch}</Badge>
                    <button
                      type="button"
                      className="text-xs text-muted-foreground underline hover:text-foreground"
                      onClick={() => setBranch(null)}
                    >
                      Change
                    </button>
                  </div>
                </div>

                <Separator />

                <Button
                  disabled={!canSubmit}
                  onClick={handleSubmit}
                  className="w-full bg-fiesta-red text-white hover:bg-fiesta-red/90 disabled:opacity-50"
                >
                  Send Order Via Messenger
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  You'll be redirected to Messenger to send your order to the{" "}
                  {branch} branch.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
