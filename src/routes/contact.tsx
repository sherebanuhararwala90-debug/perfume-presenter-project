import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const title = "Contact — The Whole Truth Parfums";
const description =
  "Questions about Truth No.1, orders or wholesale? Reach The Whole Truth Parfums by email, phone or the contact form.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h1 className="mt-3 text-4xl sm:text-5xl">Ask us anything about the formula</h1>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Our perfumer answers ingredient questions personally, usually within one working day.
          </p>
          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="eyebrow">Email</dt>
              <dd className="mt-1">care@thewholetruthparfums.in</dd>
            </div>
            <div>
              <dt className="eyebrow">Phone</dt>
              <dd className="mt-1">+91 98200 00000 · Mon–Sat, 10am–7pm IST</dd>
            </div>
            <div>
              <dt className="eyebrow">Studio</dt>
              <dd className="mt-1">14 Kamala Mills, Lower Parel, Mumbai 400013</dd>
            </div>
          </dl>
        </div>

        <form
          className="border border-border bg-card p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <label className="eyebrow block" htmlFor="name">Name</label>
          <input id="name" required className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm" />

          <label className="eyebrow mt-6 block" htmlFor="email">Email</label>
          <input id="email" type="email" required className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm" />

          <label className="eyebrow mt-6 block" htmlFor="message">Message</label>
          <textarea id="message" rows={5} required className="mt-2 w-full border border-border bg-background px-4 py-3 text-sm" />

          <button type="submit" className="btn-gold mt-8 w-full">Send message</button>
          {sent && (
            <p className="mt-4 text-sm text-muted-foreground">
              Thanks — we'll reply to you within one working day.
            </p>
          )}
        </form>
      </main>

      <SiteFooter />
    </div>
  );
}
