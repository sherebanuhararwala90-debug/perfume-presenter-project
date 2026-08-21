import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import productMain from "@/assets/product-main.webp";
import heroBottle from "@/assets/hero-bottle.webp";
import notesImg from "@/assets/notes.webp";
import packagingImg from "@/assets/packaging.webp";

const title = "Truth No.1 Eau de Parfum — 50ml | The Whole Truth Parfums";
const description =
  "Buy Truth No.1 by The Whole Truth Parfums: bergamot, night jasmine and Assam oud, 22% concentration, 9-hour wear. 50ml ₹2,499 with free shipping.";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProductPage,
});

const thumbs = [
  { src: heroBottle, alt: "Truth No.1 perfume bottle by The Whole Truth Parfums in daylight" },
  { src: packagingImg, alt: "Truth No.1 black gift box packaging by The Whole Truth Parfums" },
  { src: notesImg, alt: "Bergamot, oud and jasmine notes inside Truth No.1 eau de parfum" },
];

const benefits = [
  { t: "9-hour wear", d: "22% parfum concentration, tested on skin in Indian summer humidity." },
  { t: "Printed formula", d: "Every note and its percentage listed on the outer carton." },
  { t: "Unisex by design", d: "Citrus-forward opening keeps the oud wearable on anyone." },
  { t: "Skin-safe", d: "IFRA compliant, no phthalates, never tested on animals." },
];

const specs: Array<[string, string]> = [
  ["Fragrance family", "Citrus · Woody · Oud"],
  ["Top notes", "Calabrian bergamot, blood orange, pink pepper"],
  ["Heart notes", "Night jasmine, Turkish rose absolute, saffron"],
  ["Base notes", "Assam oud, cedarwood, vetiver, ambergris accord"],
  ["Concentration", "Eau de Parfum, 22%"],
  ["Longevity / Sillage", "8–9 hours / Moderate to strong"],
  ["Volume", "50ml (also 10ml travel)"],
  ["Made in", "Kannauj, India"],
];

const sizes = ["10ml Travel — ₹749", "50ml — ₹2,499", "100ml — ₹4,199"];
const finishes = ["Classic Black", "Gold Edition"];

function ProductPage() {
  const [size, setSize] = useState(sizes[1]);
  const [finish, setFinish] = useState(finishes[0]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-2">
          <div>
            <img
              src={productMain}
              alt="The Whole Truth Parfums Truth No.1 eau de parfum 50ml bottle on display"
              width={1024}
              height={1024}
              fetchPriority="high"
              className="w-full object-cover"
            />
            <div className="mt-4 grid grid-cols-3 gap-4">
              {thumbs.map((t) => (
                <img
                  key={t.alt}
                  src={t.src}
                  alt={t.alt}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="aspect-square w-full border border-border object-cover"
                />
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">The Whole Truth Parfums</p>
            <h1 className="mt-4 text-4xl sm:text-5xl">
              Truth No.1 — Bergamot &amp; Oud Eau de Parfum
            </h1>
            <p className="mt-4 text-sm tracking-[0.18em] uppercase text-muted-foreground">
              <span className="text-accent">★★★★★</span> 4.8 / 5 · 1,240 reviews
            </p>
            <p className="mt-6 font-display text-4xl">₹2,499 <span className="text-lg text-muted-foreground line-through">₹3,200</span></p>

            <div className="mt-8">
              <p className="eyebrow">Size</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`border px-4 py-2 text-xs tracking-[0.15em] uppercase ${
                      size === s ? "border-foreground bg-foreground text-background" : "border-border"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="eyebrow">Bottle finish</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {finishes.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFinish(f)}
                    className={`border px-4 py-2 text-xs tracking-[0.15em] uppercase ${
                      finish === f ? "border-foreground bg-foreground text-background" : "border-border"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <button type="button" className="btn-gold mt-9 w-full">
              Add to Cart · Buy Now
            </button>
            <p className="mt-4 text-xs tracking-[0.15em] uppercase text-muted-foreground">
              Free shipping · 30-day returns · Ships in 24 hours
            </p>
          </div>
        </section>

        <section className="border-y border-border bg-secondary/30">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="eyebrow">Why people re-buy it</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Key benefits</h2>
            <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b) => (
                <article key={b.t} className="bg-background p-7">
                  <h3 className="text-xl">{b.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-16">
          <p className="eyebrow">Full disclosure</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">Specifications</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <tbody>
                {specs.map(([k, v]) => (
                  <tr key={k} className="border-b border-border">
                    <th scope="row" className="w-2/5 py-4 pr-4 font-normal tracking-[0.12em] uppercase text-muted-foreground">
                      {k}
                    </th>
                    <td className="py-4">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="border-t border-border bg-secondary/30">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center">
            <h2 className="text-3xl sm:text-4xl">Wear the whole truth.</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              50ml of Truth No.1, formula card included. If it isn't your scent, send it back within
              30 days.
            </p>
            <button type="button" className="btn-gold mt-8">
              Order now — ₹2,499
            </button>
            <p className="mt-6 text-xs tracking-[0.15em] uppercase text-muted-foreground">
              Questions? <Link to="/contact" className="underline">Talk to us</Link>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
