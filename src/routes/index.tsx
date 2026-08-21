import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import heroBottle from "@/assets/hero-bottle.jpg";
import notesImg from "@/assets/notes.jpg";
import packagingImg from "@/assets/packaging.jpg";

const title = "The Whole Truth Parfums — Truth No.1 Oud & Bergamot Eau de Parfum";
const description =
  "Truth No.1 by The Whole Truth Parfums: a citrus-oud eau de parfum with every note and percentage printed on the box. 50ml, ₹2,499.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

const categories = [
  {
    name: "Citrus Openings",
    copy: "Calabrian bergamot and blood orange for the first ten minutes that decide everything.",
  },
  {
    name: "Oud & Woods",
    copy: "Assam oud, cedar and vetiver — the spine that holds the fragrance to skin all day.",
  },
  {
    name: "Floral Hearts",
    copy: "Night jasmine and Turkish rose absolute, dosed low so it reads warm, never sweet.",
  },
  {
    name: "Full Disclosure",
    copy: "Every ingredient, every percentage, printed on the outer carton. No 'parfum' catch-all.",
  },
];

const testimonials = [
  {
    quote:
      "First perfume I have bought where the box tells me exactly what is inside. And it lasts nine hours.",
    name: "Ananya R.",
    city: "Bengaluru",
  },
  {
    quote:
      "Truth No.1 smells expensive without shouting. The oud is smoky, the bergamot keeps it wearable to work.",
    name: "Kabir S.",
    city: "Mumbai",
  },
  {
    quote: "Bought it as a gift, ended up keeping it. The packaging alone is worth the price.",
    name: "Meher D.",
    city: "Delhi",
  },
];

const badges = ["Fast Shipping", "Satisfaction Guaranteed", "IFRA Compliant", "Cruelty Free"];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow">Eau de Parfum · 50ml</p>
            <h1 className="mt-5 text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Truth No.1
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
              The Whole Truth Parfums makes fragrance with nothing hidden — bergamot, oud and
              jasmine, every percentage printed on the box.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/product" className="btn-gold">
                Shop Truth No.1 — ₹2,499
              </Link>
              <Link to="/product" className="btn-outline-gold">
                Read the formula
              </Link>
            </div>
            <p className="mt-6 text-xs tracking-[0.18em] uppercase text-muted-foreground">
              ★★★★★ 4.8 / 5 · 1,240 verified reviews
            </p>
          </div>

          <img
            src={heroBottle}
            alt="The Whole Truth Parfums Truth No.1 eau de parfum bottle on a stone plinth"
            width={1536}
            height={1024}
            fetchPriority="high"
            className="w-full object-cover"
          />
        </section>

        <section className="border-y border-border bg-secondary/30">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="eyebrow">The Composition</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Four things we refuse to hide</h2>
            <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((c) => (
                <article key={c.name} className="bg-background p-7">
                  <h3 className="text-xl">{c.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2">
          <img
            src={notesImg}
            alt="Bergamot, oud wood chips and jasmine ingredients used in Truth No.1 by The Whole Truth Parfums"
            width={1024}
            height={768}
            loading="lazy"
            className="w-full object-cover"
          />
          <div>
            <p className="eyebrow">One line, honestly</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              We started because perfume labels tell you almost nothing.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Truth No.1 opens bright with Calabrian bergamot, settles into night jasmine, and dries
              down on Assam oud and vetiver. 22% concentration, 9-hour wear, and a printed formula
              card in every box.
            </p>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/30">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="eyebrow">Loved by 40,000 noses</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">4.8 average across 1,240 reviews</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <figure key={t.name} className="border border-border bg-background p-7">
                  <p className="text-accent" aria-label="5 out of 5 stars">★★★★★</p>
                  <blockquote className="mt-4 leading-relaxed">“{t.quote}”</blockquote>
                  <figcaption className="mt-5 text-xs tracking-[0.18em] uppercase text-muted-foreground">
                    {t.name} — {t.city}
                  </figcaption>
                </figure>
              ))}
            </div>
            <ul className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {badges.map((b) => (
                <li
                  key={b}
                  className="bg-background px-5 py-6 text-center text-xs tracking-[0.2em] uppercase"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow">The Offer</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              50ml, ₹2,499 — free shipping and a 30-day return, no questions.
            </h2>
            <Link to="/product" className="btn-gold mt-8">
              Order Truth No.1
            </Link>
          </div>
          <img
            src={packagingImg}
            alt="The Whole Truth Parfums Truth No.1 black gift box beside the perfume bottle"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full object-cover"
          />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
