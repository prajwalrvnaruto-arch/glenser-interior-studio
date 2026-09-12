import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { SERVICES } from "@/data/services";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/shared/QuoteModal";

export function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Every discipline, one
            <br />
            <em className="text-oak not-italic">accountable</em> studio.
          </>
        }
        description="Six practice areas under one roof — so your project moves forward without you ever having to translate between architect, contractor and designer."
        image="/assets/services/residential.png"
      />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="space-y-20 sm:space-y-28">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            const reversed = i % 2 === 1;
            return (
              <section
                key={service.id}
                id={service.id}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <AnimatedSection className={reversed ? "lg:order-2" : ""}>
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full rounded-3xl object-cover"
                  />
                </AnimatedSection>

                <div className={`${reversed ? "lg:order-1" : ""}`}>
                  <AnimatedSection>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-oak/15 text-oak-dark">
                      <Icon className="h-5.5 w-5.5" />
                    </span>
                    <p className="mt-6 font-sans text-[0.7rem] uppercase tracking-[0.3em] text-oak-dark">
                      {String(i + 1).padStart(2, "0")} / 06
                    </p>
                    <h2 className="mt-2 font-serif text-3xl font-medium text-charcoal sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-5 font-sans text-base leading-relaxed text-muted">
                      {service.description}
                    </p>

                    <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 font-sans text-sm text-charcoal">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-oak/15">
                            <Check className="h-3.5 w-3.5 text-oak-dark" />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-9">
                      <QuoteModal
                        defaultProjectType={service.title}
                        trigger={
                          <Button variant="outline">
                            Request a quote · {service.title}
                          </Button>
                        }
                      />
                    </div>
                  </AnimatedSection>
                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="mt-24 rounded-3xl bg-charcoal px-8 py-16 text-center sm:px-16">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl font-medium text-ivory sm:text-4xl">
            Not sure what you need? Start with a conversation.
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-base text-ivory/70">
            A free, no-obligation consultation to understand your space, timeline and
            budget — then we'll recommend the right path.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <QuoteModal trigger={<Button variant="accent" size="lg">Book a Free Consultation</Button>} />
            <Link
              to="/process"
              className="inline-flex h-14 items-center justify-center rounded-full border border-ivory/30 px-9 font-sans text-base font-medium text-ivory transition-colors hover:border-ivory hover:bg-ivory/10"
            >
              How we work
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}