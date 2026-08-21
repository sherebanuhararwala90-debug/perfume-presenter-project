import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const title = "Reviews — Truth No.1 | The Whole Truth Parfums";
const description =
  "1,240 verified reviews of Truth No.1 by The Whole Truth Parfums: longevity, sillage and honest notes from real wearers across India.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ReviewsPage,
});

const reviews = [
  { n: "Ananya R.", c: "Bengaluru", s: 5, q: "The formula card in the box changed how I shop for perfume. Nine hours on skin, easily." },
  { n: "Kabir S.", c: "Mumbai", s: 5, q: "Smoky oud with a bright citrus opening — office safe in the morning, dinner ready by night." },
  { n: "Meher D.", c: "Delhi", s: 5, q: "Bought as a gift, kept it for myself. The packaging feels far above the price." },
  { n: "Rohan T.", c: "Pune", s: 4, q: "Superb dry-down. I'd like a 100ml refill pouch to cut down on glass." },
  { n: "Ishita K.", c: "Kolkata", s: 5, q: "Jasmine is dosed perfectly. Not a single person has guessed the price correctly." },
  { n: "Vikram N.", c: "Hyderabad", s: 5, q: "Third bottle. Consistent batch to batch, which is rare at this price in India." },
];

function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 py-16">
        <p className="eyebrow">Verified buyers</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">4.8 out of 5, across 1,240 reviews</h1>
        <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
          We publish every review, including the ones asking us to do better.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.n} className="border border-border bg-card p-7">
              <p className="text-accent" aria-label={`${r.s} out of 5 stars`}>
                {"★".repeat(r.s)}
                <span className="text-muted-foreground">{"★".repeat(5 - r.s)}</span>
              </p>
              <blockquote className="mt-4 leading-relaxed">“{r.q}”</blockquote>
              <figcaption className="mt-5 text-xs tracking-[0.18em] uppercase text-muted-foreground">
                {r.n} — {r.c}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14">
          <Link to="/product" className="btn-gold">
            Try Truth No.1 — ₹2,499
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
