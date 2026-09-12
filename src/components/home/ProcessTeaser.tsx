import { Link } from "react-router-dom";
import { PROCESS_STEPS } from "@/data/process";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ArrowRight } from "lucide-react";

export function ProcessTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        eyebrow="How We Work"
        title="A process designed to feel calm"
        description="Four clear steps — no surprises, no chaos. You always know where your project stands."
        align="center"
      />

      <ol className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {PROCESS_STEPS.map((step, i) => {
          const Icon = step.icon;
          return (
            <AnimatedSection key={step.number} delay={0.08 * i}>
              <li className="group relative flex h-full flex-col">
                {/* Connector line */}
                {i < PROCESS_STEPS.length - 1 && (
                  <span className="absolute left-1/2 top-24 hidden h-px w-full bg-charcoal/10 lg:block" />
                )}

                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/85 text-charcoal shadow-lg backdrop-blur-md">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="absolute right-3 top-3 font-serif text-sm font-medium text-ivory/80">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-5 text-center font-serif text-xl font-medium text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-2 text-center font-sans text-sm text-muted leading-relaxed">
                  {step.short}
                </p>
                <p className="mt-2 text-center font-sans text-[0.7rem] uppercase tracking-[0.15em] text-oak">
                  {step.timeline}
                </p>
              </li>
            </AnimatedSection>
          );
        })}
      </ol>

      <AnimatedSection className="mt-14 text-center">
        <Link
          to="/process"
          className="inline-flex items-center gap-2 font-sans text-sm font-medium text-charcoal transition-colors hover:text-oak-dark"
        >
          See the full process
          <ArrowRight className="h-4 w-4" />
        </Link>
      </AnimatedSection>
    </section>
  );
}