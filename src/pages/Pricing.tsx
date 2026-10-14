import { Check, X } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/shared/QuoteModal";
import { cn } from "@/lib/utils";
import {
  DESIGN_PACKAGE_ROWS,
  DESIGN_PACKAGES,
  CONSTRUCTION_CATEGORIES,
  CONSTRUCTION_PACKAGES,
} from "@/data/pricing";

const HEADER_STYLES: Record<string, string> = {
  primary: "bg-charcoal text-ivory",
  accent: "bg-oak text-charcoal",
  oxide: "bg-oxide text-ivory",
};

const BUTTON_VARIANTS: Record<string, "primary" | "accent" | "outline"> = {
  primary: "primary",
  accent: "accent",
  oxide: "outline",
};

export function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Transparent packages,
            <br />
            <em className="text-oak not-italic">no surprises.</em>
          </>
        }
        description="Two ways to get started — a design package to plan your home, and a construction package to build it. Every rate is per square foot, laid out so you know exactly what's included."
        image="/assets/services/architecture.png"
      />

      {/* Architectural Design Packages */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Design"
          title="Our Architectural Design Packages"
          description="All designs are done by a team of architects, structural engineers and 3D visualizers, in coordination with civil engineers and project managers — ensuring both creativity and practicality for construction."
        />

        <AnimatedSection delay={0.1} className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="w-1/3 py-4 text-left align-bottom font-sans text-sm font-medium text-charcoal">
                  Architectural Design Package
                </th>
                {DESIGN_PACKAGES.map((pkg) => (
                  <th key={pkg.id} className="w-0 px-2 pb-0 align-bottom">
                    <div
                      className={cn(
                        "rounded-t-2xl px-4 py-5 text-center",
                        HEADER_STYLES[pkg.variant]
                      )}
                    >
                      <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.15em]">
                        {pkg.name}
                      </p>
                      <p className="mt-2 font-sans text-xs opacity-85">{pkg.tagline}</p>
                      <p className="mt-4 font-serif text-3xl font-medium">
                        {pkg.rate}
                        <span className="ml-1 font-sans text-xs font-normal opacity-80">
                          per sqft
                        </span>
                      </p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DESIGN_PACKAGE_ROWS.map((row, i) => (
                <tr key={row} className={i % 2 === 0 ? "bg-cream" : "bg-ivory"}>
                  <td className="px-4 py-3.5 font-sans text-sm text-charcoal">{row}</td>
                  {DESIGN_PACKAGES.map((pkg) => (
                    <td key={pkg.id} className="px-2 py-3.5 text-center">
                      {pkg.included[i] ? (
                        <Check className="mx-auto h-4.5 w-4.5 text-oak-dark" />
                      ) : (
                        <X className="mx-auto h-4.5 w-4.5 text-oxide/60" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td />
                {DESIGN_PACKAGES.map((pkg) => (
                  <td key={pkg.id} className="px-2 pb-2 pt-6">
                    <QuoteModal
                      defaultProjectType="Design"
                      trigger={
                        <Button
                          variant={BUTTON_VARIANTS[pkg.variant]}
                          size="sm"
                          className="w-full"
                        >
                          Book Now
                        </Button>
                      }
                    />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </AnimatedSection>
        <p className="mt-4 font-sans text-xs text-muted">
          * Site assessment and soil test report are subject to site accessibility and local
          regulations.
        </p>
      </section>

      {/* Home Construction Packages */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Construction"
            title="Our Home Construction Packages"
            description="Full turnkey construction, priced per square foot — choose the finish level that matches your vision and budget."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {CONSTRUCTION_PACKAGES.map((pkg, i) => (
              <AnimatedSection key={pkg.id} delay={0.08 * i} className="h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-charcoal/8 bg-ivory shadow-sm shadow-charcoal/[0.03]">
                  <div className={cn("px-7 py-7 text-center", HEADER_STYLES[pkg.variant])}>
                    <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em]">
                      {pkg.name}
                    </p>
                    <p className="mt-2 font-serif text-3xl font-medium">
                      {pkg.rate}
                      <span className="ml-1 font-sans text-xs font-normal opacity-80">
                        per sqft
                      </span>
                    </p>
                  </div>

                  <ul className="flex-1 divide-y divide-charcoal/8 px-7">
                    {CONSTRUCTION_CATEGORIES.map((cat) => (
                      <li key={cat.label} className="py-4">
                        <p className="font-sans text-sm font-medium text-charcoal">
                          {cat.label}
                        </p>
                        <p className="mt-1 font-sans text-xs leading-relaxed text-muted">
                          {cat.detail}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <div className="p-7 pt-6">
                    <QuoteModal
                      defaultProjectType="Civil Construction"
                      trigger={
                        <Button
                          variant={BUTTON_VARIANTS[pkg.variant]}
                          size="lg"
                          className="w-full"
                        >
                          Get Detailed Specification
                        </Button>
                      }
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <p className="mt-8 text-center font-sans text-xs text-muted">
            * Note: Minimum overall built-up area should be 2,000 sqft.
          </p>

          <AnimatedSection delay={0.2} className="mt-8 flex justify-center">
            <QuoteModal
              defaultProjectType="Estimation"
              trigger={
                <Button variant="primary" size="lg">
                  Get Free Estimate with Material &amp; Brand Specification
                </Button>
              }
            />
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
