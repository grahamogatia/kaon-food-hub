import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/site";
import { navLinks } from "@/lib/nav";
import { Separator } from "@/components/ui/separator";
import logoSrc from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-neutral-950 text-neutral-300">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={logoSrc} alt="" className="h-10 w-10 object-contain" />
              <span className="font-harabara text-lg tracking-tight [word-spacing:-0.25em] text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/order"
                className="text-sm text-neutral-400 transition-colors hover:text-white"
              >
                Order Now
              </Link>
            </nav>
          </div>         
        </div>

        <Separator className="my-8 bg-neutral-800" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
