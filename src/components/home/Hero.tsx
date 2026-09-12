import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/shared/QuoteModal";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section className="relative min-h-[92svh] w-full overflow-hidden">
      <style>{`
        @keyframes hero-pan {
          0%, 100% { transform: scale(1.08) translateX(0); }
          50%      { transform: scale(1.08) translateX(-2.5%); }
        }
        @media (prefers-reduced-motion: no-preference) {
          .hero-pan { animation: hero-pan 20s ease-in-out infinite; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-pan { animation: none; }
        }
      `}</style>
      {/* Desktop hero image */}
      <img
        src="/assets/hero/hero-desktop.png"
        alt="Serene luxury living room with Bengaluru city views"
        className="absolute inset-0 hidden h-full w-full object-cover object-center sm:block"
        fetchPriority="high"
        loading="eager"
      />
      {/* Mobile hero image */}
      <img
        src="/assets/hero/hero-mobile.png"
        alt="Warm minimalist double-height living room"
        className="hero-pan absolute inset-0 block h-full w-full object-cover object-center sm:hidden"
        fetchPriority="high"
        loading="eager"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/25 to-charcoal/10" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-end px-5 pb-20 pt-32 sm:px-8 sm:pb-28"
      >
        <motion.p
          variants={item}
          className="mb-5 flex items-center gap-3 font-sans text-[0.7rem] uppercase tracking-[0.32em] text-ivory/85"
        >
          <span className="h-px w-10 bg-oak" />
          Interior Design &amp; Architecture · Bengaluru
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-3xl font-serif text-5xl leading-[1.05] font-medium text-ivory sm:text-6xl md:text-7xl"
        >
          Spaces Designed
          <br />
          Around <em className="text-ivory not-italic">You.</em>
        </motion.h1>

        {/* Service tags — mobile only */}
        <motion.p
          variants={item}
          className="mt-4 font-sans text-[0.68rem] uppercase tracking-[0.25em] text-ivory/70 sm:hidden"
        >
          Residential · Commercial · Kitchens
        </motion.p>

        {/* Description — desktop only */}
        <motion.p
          variants={item}
          className="hidden mt-5 max-w-xl font-sans text-base leading-relaxed text-ivory/85 sm:block sm:mt-6 sm:text-lg"
        >
          Warm, contemporary interiors across Bengaluru — designed around how you live.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4"
        >
          <QuoteModal
            trigger={
              <Button variant="accent" size="lg">
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
            }
          />
          <Link
            to="/projects"
            className="inline-flex h-14 items-center justify-center rounded-full border border-ivory/35 px-9 font-sans text-base font-medium text-ivory backdrop-blur-sm transition-all duration-300 hover:border-ivory hover:bg-ivory/10"
          >
            View Our Work
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}