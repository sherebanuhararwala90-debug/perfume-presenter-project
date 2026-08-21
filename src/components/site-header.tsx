import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/product", label: "Product Details" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between">
        <Link to="/" className="min-w-0">
          <span className="block font-display text-xl tracking-[0.3em] uppercase">
            The Whole Truth
          </span>
          <span className="eyebrow block">Parfums</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-xs tracking-[0.18em] uppercase text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/product" className="btn-gold shrink-0">
            Shop Now
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 border border-border px-3 py-2 text-xs tracking-[0.2em] uppercase md:hidden"
        >
          Menu
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-xs tracking-[0.2em] uppercase text-muted-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/product" onClick={() => setOpen(false)} className="btn-gold mt-3 w-full">
            Shop Now
          </Link>
        </nav>
      )}
    </header>
  );
}
