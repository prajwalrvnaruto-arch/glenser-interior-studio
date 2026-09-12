import { TESTIMONIALS } from "@/data/testimonials";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { TestimonialCard } from "@/components/shared/TestimonialCard";

export function Testimonials() {
  const featured = TESTIMONIALS.slice(0, 3);
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Client Stories"
          title="What our clients say"
          description="We measure our work in handovers that feel like home — and in the relationships that follow."
          align="center"
        />
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {featured.map((t, i) => (
            <AnimatedSection key={t.name} delay={0.08 * i} className="h-full">
              <TestimonialCard t={t} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}