import { useState } from "react";
import { Check, X, ChevronDown, ShieldCheck } from "lucide-react";
import type { DiagnosisResult, QuizOffer } from "@/types/quiz";

interface Props {
  diagnosis: DiagnosisResult | null;
  offer: QuizOffer;
  brand: string;
}

export function Result({ diagnosis, offer, brand }: Props) {
  return (
    <div className="animate-fade-up">
      {/* Diagnosis */}
      {diagnosis && (
        <section className="container-quiz max-w-2xl py-12 sm:py-16 text-center">
          <span className="inline-block rounded-full bg-gold px-5 py-2 text-xs font-semibold tracking-wider text-gold-foreground">
            SEU DIAGNÓSTICO
          </span>
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-semibold text-foreground">
            {diagnosis.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {diagnosis.summary}
          </p>
          {diagnosis.description && (
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              {diagnosis.description}
            </p>
          )}
        </section>
      )}

      {/* Offer Hero */}
      <SectionDark>
        <div className="container-quiz max-w-2xl text-center py-12 sm:py-20">
          {offer.hero.badge && (
            <span className="inline-block rounded-full bg-gold px-4 py-1.5 text-[11px] font-semibold tracking-wider text-gold-foreground">
              {offer.hero.badge}
            </span>
          )}
          <h2 className="mt-5 font-serif text-3xl sm:text-5xl font-semibold text-cream">
            {offer.hero.headline}
          </h2>
          {offer.hero.subheadline && (
            <p className="mt-4 text-cream/80 text-base sm:text-lg">{offer.hero.subheadline}</p>
          )}
        </div>
      </SectionDark>

      {/* Problem */}
      <Section title={offer.problem.title}>
        <p className="text-muted-foreground leading-relaxed">{offer.problem.text}</p>
      </Section>

      {/* Solution */}
      <Section title={offer.solution.title} tone="muted">
        <p className="text-muted-foreground leading-relaxed">{offer.solution.text}</p>
      </Section>

      {/* Before / After */}
      <Section title={offer.beforeAfter.title}>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h4 className="font-serif text-xl mb-4">Antes</h4>
            <ul className="space-y-2">
              {offer.beforeAfter.before.map((t, i) => (
                <li key={i} className="flex gap-2 text-muted-foreground">
                  <X className="h-5 w-5 text-destructive shrink-0" /> <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gold/40 bg-card p-6">
            <h4 className="font-serif text-xl mb-4">Depois</h4>
            <ul className="space-y-2">
              {offer.beforeAfter.after.map((t, i) => (
                <li key={i} className="flex gap-2 text-foreground">
                  <Check className="h-5 w-5 text-gold shrink-0" /> <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section title={offer.benefits.title} tone="muted">
        <ul className="grid sm:grid-cols-2 gap-3">
          {offer.benefits.items.map((b, i) => (
            <li key={i} className="flex gap-2 items-start rounded-xl bg-card p-4 border border-border">
              <Check className="h-5 w-5 text-gold shrink-0 mt-0.5" />
              <span className="text-foreground">{b}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* How it works */}
      <Section title={offer.howItWorks.title}>
        <div className="grid sm:grid-cols-3 gap-4">
          {offer.howItWorks.steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 text-center">
              <h4 className="font-serif text-2xl text-gold">{s.title}</h4>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section title={offer.testimonials.title} tone="muted">
        <div className="grid sm:grid-cols-3 gap-4">
          {offer.testimonials.items.map((t, i) => (
            <figure key={i} className="rounded-2xl bg-card border border-border p-6">
              <blockquote className="text-foreground italic">"{t.text}"</blockquote>
              <figcaption className="mt-3 text-sm text-muted-foreground">
                — {t.name}{t.role ? `, ${t.role}` : ""}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Author */}
      <Section title={offer.author.title}>
        <div className="rounded-2xl border border-border bg-card p-6 max-w-2xl mx-auto text-center">
          <h4 className="font-serif text-2xl text-foreground">{offer.author.name}</h4>
          <p className="mt-3 text-muted-foreground leading-relaxed">{offer.author.bio}</p>
        </div>
      </Section>

      {/* Pricing */}
      <SectionDark>
        <div className="container-quiz max-w-md text-center py-16">
          {offer.pricing.badge && (
            <span className="inline-block rounded-full bg-gold px-4 py-1.5 text-[11px] font-semibold tracking-wider text-gold-foreground">
              {offer.pricing.badge}
            </span>
          )}
          <h3 className="mt-5 font-serif text-3xl text-cream">{offer.pricing.title}</h3>
          <div className="mt-6 rounded-2xl bg-cream/5 border border-cream/10 p-6">
            {offer.pricing.oldPrice && (
              <p className="text-cream/60 line-through">{offer.pricing.oldPrice}</p>
            )}
            <p className="font-serif text-5xl text-gold mt-1">{offer.pricing.price}</p>
            <ul className="mt-6 text-left space-y-2">
              {offer.pricing.bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-cream/90">
                  <Check className="h-5 w-5 text-gold shrink-0" /> <span>{b}</span>
                </li>
              ))}
            </ul>
            <a
              href={offer.pricing.ctaUrl}
              className="mt-6 block w-full rounded-md bg-gold py-4 text-center font-semibold tracking-wider text-gold-foreground hover:brightness-95 active:scale-[0.98] transition"
            >
              {offer.pricing.cta.toUpperCase()}
            </a>
          </div>
        </div>
      </SectionDark>

      {/* Guarantee */}
      <Section title={offer.guarantee.title}>
        <div className="max-w-xl mx-auto text-center">
          <ShieldCheck className="h-12 w-12 text-gold mx-auto" />
          <p className="mt-3 text-muted-foreground leading-relaxed">{offer.guarantee.text}</p>
        </div>
      </Section>

      {/* FAQ */}
      <Section title={offer.faq.title} tone="muted">
        <div className="max-w-2xl mx-auto flex flex-col gap-2">
          {offer.faq.items.map((item, i) => <FAQItem key={i} q={item.q} a={item.a} />)}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="container-quiz max-w-xl text-center py-16 sm:py-20">
        <h3 className="font-serif text-2xl sm:text-3xl text-foreground">
          {offer.finalCta.headline}
        </h3>
        <a
          href={offer.finalCta.url}
          className="mt-8 inline-block rounded-md bg-gold px-10 py-4 font-semibold tracking-wider text-gold-foreground hover:brightness-95 active:scale-[0.98] transition"
        >
          {offer.finalCta.button.toUpperCase()}
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <p className="font-serif text-base text-foreground">{offer.footer.brand || brand}</p>
        {offer.footer.text && <p className="mt-1">{offer.footer.text}</p>}
      </footer>
    </div>
  );
}

function Section({
  title,
  children,
  tone = "default",
}: {
  title: string;
  children: React.ReactNode;
  tone?: "default" | "muted";
}) {
  return (
    <section className={tone === "muted" ? "bg-muted/40" : ""}>
      <div className="container-quiz max-w-4xl py-14 sm:py-20">
        <h3 className="font-serif text-2xl sm:text-3xl text-foreground text-center mb-8">
          {title}
        </h3>
        {children}
      </div>
    </section>
  );
}

function SectionDark({ children }: { children: React.ReactNode }) {
  return (
    <section style={{ background: "oklch(0.22 0.04 60)" }}>
      {children}
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
      >
        <span className="font-medium text-foreground">{q}</span>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="px-5 pb-4 text-muted-foreground">{a}</div>}
    </div>
  );
}
