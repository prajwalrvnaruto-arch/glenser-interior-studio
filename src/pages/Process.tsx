import { Link } from "react-router-dom";
import { PROCESS_STEPS } from "@/data/process";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/shared/QuoteModal";
import { ArrowRight } from "lucide-react";

const TOTAL_DURATION = "6 – 10 weeks";

export function Process() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title={
          <>
            A calm path from
            <br />
            <em className="text-oak not-italic">moodboard</em> to keys.
          </>
        }
        description="Interiors are stressful when they're vague. Ours are the opposite — a transparent, four-step process where you always know what happens next."
        image="/assets/process/design.png"
      />

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="relative">
          {/* Rail */}
          <span className="absolute left-[1.35rem] top-6 bottom-6 w-px bg-charcoal/10 sm:left-[2.35rem]" />

          <div className="space-y-16 sm:space-y-24">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative grid gap-8 sm:grid-cols-2 sm:gap-12">
                  {/* Node */}
                  <span className="absolute left-0 top-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 bg-ivory shadow-md sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 text-oak-dark" />
                  </span>

                  <AnimatedSection className="pl-16 sm:pl-20">
                    <img
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                      className="aspect-[4/3] w-full rounded-3xl object-cover"
                    />
                  </AnimatedSection>

                  <AnimatedSection delay={0.1} className="flex flex-col justify-center sm:pr-8">
                    <div className="flex items-center gap-4">
                      <span className="font-serif text-5xl font-light text-travertine">
                        {step.number}
                      </span>
                      <div>
                        <h2 className="font-serif text-2xl font-medium text-charcoal sm:text-3xl">
                          {step.title}
                        </h2>
                        <p className="mt-1 font-sans text-[0.7rem] uppercase tracking-[0.18em] text-oak-dark">
                          {step.timeline}
                        </p>
                      </div>
                    </div>
                    <p className="mt-5 font-sans text-base leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </AnimatedSection>
                </div>
              );
            })}
          </div>
        </div>

        {/* Duration banner */}
        <AnimatedSection className="mt-16">
          <div className="flex flex-col items-center gap-3 rounded-3xl border border-charcoal/8 bg-cream px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex flex-col gap-1">
              <p className="font-serif text-2xl font-medium text-charcoal">
                Typical project duration
              </p>
              <p className="font-sans text-sm text-muted">
                {TOTAL_DURATION} from first consultation to final handover — sized to your
                scope, and confirmed before we begin.
              </p>
            </div>
            <p className="whitespace-nowrap font-serif text-4xl font-medium text-oak">
              {TOTAL_DURATION}
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <SectionHeading
            eyebrow="Your Turn"
            title="Ready to start step one?"
            description="Book a free consultation and tell us what you're envisioning — the rest of the process is ours to carry."
            align="center"
          />
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <QuoteModal
              trigger={<Button variant="accent" size="lg">Get a Quote</Button>}
            />
            <Link
              to="/contact"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-ivory/30 px-9 font-sans text-base font-medium text-ivory transition-all duration-300 hover:border-ivory hover:bg-ivory/10"
            >
              Contact the studio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}