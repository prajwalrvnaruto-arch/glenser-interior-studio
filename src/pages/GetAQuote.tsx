import { ShieldCheck, MessageCircle, Phone, Clock3 } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { QuoteForm } from "@/components/shared/QuoteForm";
import { BUSINESS_PHONE, BUSINESS_HOURS, waLink, BUSINESS_NAME } from "@/lib/utils";

export function GetAQuote() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Get a Quote"
        title={
          <>
            Tell us what you're
            <br />
            <em className="text-oak not-italic">envisioning.</em>
          </>
        }
        description="A few details help us prepare a realistic, itemised estimate. Nothing here is binding — it's the start of the conversation."
        image="/assets/contact/consultation-banner.png"
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Form */}
          <AnimatedSection className="lg:col-span-3">
            <div className="rounded-3xl border border-charcoal/8 bg-ivory p-7 shadow-sm shadow-charcoal/[0.03] sm:p-10">
              <h2 className="font-serif text-2xl font-medium text-charcoal sm:text-3xl">
                Request your quote
              </h2>
              <p className="mt-2 font-sans text-sm text-muted">
                All fields help us prepare a better estimate — the more you share, the more
                accurate we can be.
              </p>
              <div className="mt-8">
                <QuoteForm />
              </div>
            </div>
          </AnimatedSection>

          {/* Sidebar */}
          <div className="space-y-5 lg:col-span-2">
            <AnimatedSection delay={0.1}>
              <div className="rounded-3xl bg-charcoal p-8 text-ivory">
                <h3 className="font-serif text-2xl font-medium">What happens next?</h3>
                <ol className="mt-6 space-y-5">
                  {[
                    ["We reply", "A designer reviews your request and calls within one working day."],
                    ["We clarify", "A short call to understand your space, style and must-haves."],
                    ["You get a plan", "A tailored proposal with scope, materials and a transparent estimate."],
                  ].map(([title, desc], i) => (
                    <li key={title} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ivory/20 font-serif text-sm text-oak">
                        {i + 1}
                      </span>
                      <p className="font-sans text-sm leading-relaxed text-ivory/85">
                        <span className="font-semibold text-ivory">{title} — </span>
                        {desc}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <a
                href="tel:+919880810444"
                className="flex items-center gap-4 rounded-3xl border border-charcoal/8 bg-cream p-6 transition-colors hover:border-oak/40"
              >
                <Phone className="h-5 w-5 text-oak-dark" />
                <div>
                  <p className="font-sans text-[0.68rem] uppercase tracking-[0.18em] text-muted">Prefer to talk?</p>
                  <p className="font-serif text-lg font-medium text-charcoal">{BUSINESS_PHONE}</p>
                </div>
              </a>
              <a
                href={waLink(`Hi ${BUSINESS_NAME}, I'd like a quote for my project.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-4 rounded-3xl border border-charcoal/8 bg-cream p-6 transition-colors hover:border-oak/40"
              >
                <MessageCircle className="h-5 w-5 text-oak-dark" />
                <div>
                  <p className="font-sans text-[0.68rem] uppercase tracking-[0.18em] text-muted">Chat on WhatsApp</p>
                  <p className="font-serif text-lg font-medium text-charcoal">Open WhatsApp</p>
                </div>
              </a>
              <div className="mt-4 flex items-center gap-4 rounded-3xl border border-charcoal/8 bg-cream p-6">
                <Clock3 className="h-5 w-5 text-oak-dark" />
                <div>
                  <p className="font-sans text-[0.68rem] uppercase tracking-[0.18em] text-muted">Response time</p>
                  <p className="font-serif text-lg font-medium text-charcoal">{BUSINESS_HOURS}</p>
                </div>
              </div>
              <div className="mt-4 flex items-start gap-4 rounded-3xl border border-charcoal/8 bg-cream p-6">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-oak-dark" />
                <p className="font-sans text-sm leading-relaxed text-muted">
                  Your details stay private within the studio — we never share or spam them.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}