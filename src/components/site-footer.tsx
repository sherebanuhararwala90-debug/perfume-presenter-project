import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg tracking-[0.3em] uppercase">The Whole Truth</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Every note, every percentage, printed on the box. Fragrance with nothing hidden.
          </p>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/product" className="hover:text-foreground">Product Details</Link></li>
            <li><Link to="/reviews" className="hover:text-foreground">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>care@thewholetruthparfums.in</li>
            <li>+91 98200 00000</li>
            <li>Mon–Sat, 10am–7pm IST</li>
            <li>Lower Parel, Mumbai 400013</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Follow</p>
          <div className="mt-4 flex gap-3">
            {["IG", "YT", "IN", "X"].map((s) => (
              <span
                key={s}
                aria-label={`The Whole Truth Parfums on ${s}`}
                className="grid h-9 w-9 shrink-0 place-items-center border border-border text-[0.65rem] tracking-widest text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border px-5 py-5 text-center text-xs tracking-[0.15em] uppercase text-muted-foreground">
        © {new Date().getFullYear()} The Whole Truth Parfums — All rights reserved
      </div>
    </footer>
  );
}
