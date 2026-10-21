import { Link } from "react-router-dom";
import { useCart, type CartItem } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Minus, Plus, Trash2 } from "lucide-react";

export function CartSheet() {
  const { items, totalPrice, totalItems, isOpen, setIsOpen, updateQuantity, removeItem } =
    useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="flex w-80 flex-col p-0 sm:w-96">
        <SheetHeader className="px-5 pt-5 pb-0">
          <SheetTitle className="text-base font-bold">
            Your Cart {totalItems > 0 && `(${totalItems})`}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-5">
            <p className="text-3xl">🛒</p>
            <p className="text-sm text-muted-foreground">Your cart is empty</p>
            <Button
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={() => setIsOpen(false)}
            >
              Continue Browsing
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <div className="space-y-4">
                {items.map((ci) => (
                  <CartItemRow
                    key={ci.item.id}
                    cartItem={ci}
                    onUpdate={updateQuantity}
                    onRemove={removeItem}
                  />
                ))}
              </div>
            </div>

            <div className="border-t border-border/40 px-5 py-4">
              <div className="flex items-center justify-between text-sm font-bold">
                <span>Total</span>
                <span className="text-fiesta-red">₱{totalPrice.toLocaleString()}</span>
              </div>

              <Separator className="my-3" />

              <Link to="/order" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-fiesta-red text-white hover:bg-fiesta-red/90">
                  Checkout
                </Button>
              </Link>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

function CartItemRow({
  cartItem,
  onUpdate,
  onRemove,
}: {
  cartItem: CartItem;
  onUpdate: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
}) {
  const { item, quantity } = cartItem;

  return (
    <div className="flex items-start gap-3">
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">
          {item.name}
          {item.paxOptions && (
            <span className="ml-1 text-xs font-normal text-muted-foreground">({item.pax})</span>
          )}
        </p>
        <p className="text-xs text-muted-foreground">
          ₱{item.price} each
        </p>
      </div>

      <div className="flex items-center gap-1.5">
        <button
          onClick={() => onUpdate(item.id, quantity - 1)}
          className="inline-flex size-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted"
        >
          <Minus className="size-3" />
        </button>
        <span className="w-6 text-center text-xs font-semibold">{quantity}</span>
        <button
          onClick={() => onUpdate(item.id, quantity + 1)}
          className="inline-flex size-7 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted"
        >
          <Plus className="size-3" />
        </button>
      </div>

      <div className="flex flex-col items-end gap-1">
        <span className="text-sm font-semibold text-fiesta-green">
          ₱{(item.price * quantity).toLocaleString()}
        </span>
        <button
          onClick={() => onRemove(item.id)}
          className="text-muted-foreground transition-colors hover:text-destructive"
        >
          <Trash2 className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
