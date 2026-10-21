import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, ShoppingBasket } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { navLinks } from "@/lib/nav";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import logoSrc from "@/assets/logo.png";

export function SiteHeader() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { totalItems, setIsOpen: setCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="border-b border-fiesta-red/20 bg-gradient-to-r from-fiesta-red via-fiesta-orange to-fiesta-red shadow-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo + brand */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logoSrc} alt={siteConfig.name} className="h-10 w-10 object-contain" />
            <span className="font-harabara text-xl tracking-tight [word-spacing:-0.25em] text-white drop-shadow-sm">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "text-sm font-medium rounded-full",
                    location.pathname === link.href
                      ? "bg-white text-fiesta-red font-semibold hover:bg-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  )}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <button
              onClick={() => setCartOpen(true)}
              className="relative ml-3 inline-flex size-10 items-center justify-center rounded-md text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <ShoppingBasket className="size-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex size-5 items-center justify-center rounded-full bg-fiesta-yellow text-[10px] font-bold text-neutral-900 shadow-sm">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
              <span className="sr-only">Open Cart</span>
            </button>
          </nav>

          <div className="flex items-center gap-1 md:hidden">
            {/* Mobile cart button */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative inline-flex size-11 items-center justify-center rounded-md text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <ShoppingBasket className="size-5" />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex size-5 items-center justify-center rounded-full bg-fiesta-yellow text-[10px] font-bold text-neutral-900 shadow-sm">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
              <span className="sr-only">Open Cart</span>
            </button>

            {/* Mobile nav */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className={cn(
                  "inline-flex size-11 items-center justify-center rounded-md",
                  "text-white/80 transition-colors hover:bg-white/10 hover:text-white",
                  "md:hidden"
                )}
              >
                <Menu className="size-5" />
                <span className="sr-only">Toggle Menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 p-0">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 bg-fiesta-red px-6 py-5">
                    <img src={logoSrc} alt="" className="h-8 w-8 object-contain" />
                    <SheetTitle className="font-harabara text-lg tracking-tight [word-spacing:-0.25em] text-white">
                      {siteConfig.name}
                    </SheetTitle>
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-fiesta-green via-fiesta-yellow to-fiesta-orange" />
                  <nav className="flex flex-col gap-1 px-4 py-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "rounded-full px-3 py-3 text-sm font-medium transition-colors hover:bg-muted",
                          location.pathname === link.href &&
                            "bg-fiesta-red/10 text-fiesta-red font-semibold hover:bg-fiesta-red/10"
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
