import { Link } from "react-router-dom";
import { SERVICES } from "@/data/services";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/shared/QuoteModal";
import { ArrowRight } from "lucide-react";

export function ServicesOverview() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="What We Do"
            title="Full-service design, from sketch to handover"
            description="One studio, every discipline — planning, interiors, joinery and execution. So you never have to juggle architects, contractors and vendors."
          />
          <AnimatedSection>
            <QuoteModal
              trigger={
                <Button variant="outline" size="lg">
                  Discuss your project
                </Button>
              }
            />
          </AnimatedSection>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <AnimatedSection key={service.id} delay={0.05 * i}>
              <ServiceCard service={service} className="h-full" />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-charcoal transition-colors hover:text-oak-dark"
          >
            Learn more about our services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}