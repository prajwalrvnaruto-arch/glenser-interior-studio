import { motion } from "framer-motion";
import { Check, Sparkles, HeartHandshake, Gem, Clock3 } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/shared/QuoteModal";
import { Link } from "react-router-dom";

const VALUES = [
  {
    icon: Sparkles,
    title: "Design Excellence",
    description:
      "Every project is artwork before it's architecture — composed with proportion, light and a quiet confidence that never shouts.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Approach",
    description:
      "No templates, no catalogues. Each home is designed around the people who live in it, right down to how you host Sunday lunch.",
  },
  {
    icon: Gem,
    title: "Honest Materials",
    description:
      "Oak, travertine, linen, brass — materials we love to touch. Sourced responsibly and detailed so they age beautifully.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "A realistic schedule you can plan your life around, with daily updates and single-point accountability from kickoff to keys.",
  },
];

const STATS = [
  { value: "120+", label: "Projects delivered" },
  { value: "9+", label: "Years in practice" },
  { value: "6", label: "Design disciplines" },
  { value: "100%", label: "Turnkey in-house" },
];

export function About() {
  return (
    <>
      <PageHero
        eyebrow="The Studio"
        title={
          <>
            Designing homes that feel
            <br />
            <em className="text-oak not-italic">inevitably</em> yours.
          </>
        }
        description="Prakash Interior Decors is a Bengaluru studio that believes great design is measured in how a space feels — not how it photographs."
        image="/assets/about/studio.png"
      />

      {/* Story */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection>
            <img
              src="/assets/about/exterior.png"
              alt="Prakash Interior Decors — modern glass entrance with landscaping"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl object-cover"
            />
          </AnimatedSection>

          <div className="flex flex-col justify-center lg:pb-8">
            <SectionHeading
              eyebrow="Our Story"
              title="Built in Bengaluru, for the way Bengaluru lives"
            />
            <AnimatedSection delay={0.1}>
              <div className="mt-7 space-y-5 font-sans text-base leading-relaxed text-muted">
                <p>
                  Prakash Interior Decors began in 2017 in a small studio in Bengaluru, with
                  a simple conviction: that the spaces we live in should feel like a warm,
                  quiet extension of the people who live in them.
                </p>
                <p>
                  Today, our team of designers, architects and execution specialists has
                  delivered over a hundred homes and workspaces across the city — each one
                  designed from a first conversation, never a template. We've kept the
                  practice deliberately boutique: it lets us know every project personally,
                  from the first moodboard to the last hour of handover.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
                {STATS.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
                  >
                    <p className="font-serif text-3xl font-medium text-charcoal sm:text-4xl">
                      {s.value}
                    </p>
                    <p className="mt-1.5 font-sans text-xs uppercase tracking-[0.12em] text-muted">
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title="The principles behind every project"
            align="center"
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <AnimatedSection key={v.title} delay={0.08 * i} className="h-full">
                  <div className="flex h-full flex-col rounded-3xl border border-charcoal/8 bg-ivory p-7 transition-shadow duration-300 hover:shadow-lg hover:shadow-charcoal/5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-oak/15 text-oak-dark">
                      <Icon className="h-5.5 w-5.5" />
                    </span>
                    <h3 className="mt-5 font-serif text-xl font-medium text-charcoal">
                      {v.title}
                    </h3>
                    <p className="mt-2.5 font-sans text-sm leading-relaxed text-muted">
                      {v.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Material library */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <SectionHeading
              eyebrow="The Material Library"
              title="We hunt for materials you'll want to touch"
            />
            <AnimatedSection delay={0.1}>
              <div className="mt-7 space-y-5 font-sans text-base leading-relaxed text-muted">
                <p>
                  Inside our studio is a working library of oak, travertine, handloom
                  textiles and metal finishes — hundreds of samples we test, pair and
                  light before anything is specified on paper.
                </p>
                <p>
                  It's the slow part of the process that makes the finished home feel
                  expensive in all the quiet ways: the weight of a door, the grain under a
                  lamp, the way a stone cools a Bengaluru evening.
                </p>
              </div>
              <ul className="mt-8 space-y-3">
                {[
                  "Material & finish curation sessions",
                  "Real on-site light testing",
                  "Ethically sourced, low-VOC options",
                  "Full joinery in our own workshop",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-sans text-sm text-charcoal"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-oak/15">
                      <Check className="h-3.5 w-3.5 text-oak-dark" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          <AnimatedSection className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/assets/about/material-library.png"
                alt="Warm modern materials showroom with samples"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-3xl object-cover"
              />
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-charcoal px-6 py-5 text-ivory shadow-xl sm:block">
                <p className="font-serif text-2xl font-medium">200+</p>
                <p className="mt-1 font-sans text-xs uppercase tracking-[0.12em] text-ivory/70">
                  Material samples in studio
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-charcoal/8 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <AnimatedSection>
            <h2 className="font-serif text-3xl font-medium text-charcoal sm:text-4xl">
              Let's design something you'll live in happily — for years.
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-sans text-base text-muted">
              The first conversation is free. Come see the studio, walk through our
              samples, and tell us what home means to you.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <QuoteModal
                trigger={<Button variant="accent" size="lg">Get a Quote</Button>}
              />
              <Link to="/contact" className="inline-flex h-14 items-center justify-center rounded-full border border-charcoal/15 px-9 font-sans text-base font-medium text-charcoal transition-colors hover:border-charcoal">
                Visit the Studio
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}