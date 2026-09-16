import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { QuoteModal } from "@/components/shared/QuoteModal";
import { ArrowRight, Phone } from "lucide-react";
import { BUSINESS_PHONE } from "@/lib/utils";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/assets/contact/consultation-banner.png"
        alt="Sunlit minimalist living room"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-charcoal/70" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center sm:px-8 sm:py-32"
      >
        <p className="mb-5 font-sans text-[0.7rem] uppercase tracking-[0.32em] text-oak">
          Ready When You Are
        </p>
        <h2 className="font-serif text-4xl font-medium leading-tight text-ivory sm:text-5xl">
          Ready to transform your space?
        </h2>
        <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-ivory/80">
          Tell us about your project — a home, a kitchen, an office. We'll start with a
          conversation, free and without obligation.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <QuoteModal
            trigger={
              <Button variant="accent" size="lg">
                Schedule a Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
            }
          />
          <a
            href="tel:+919591344715"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-ivory/35 px-9 font-sans text-base font-medium text-ivory backdrop-blur-sm transition-all duration-300 hover:border-ivory hover:bg-ivory/10"
          >
            <Phone className="h-4 w-4" />
            {BUSINESS_PHONE}
          </a>
        </div>

        <Link
          to="/contact"
          className="mt-8 font-sans text-sm text-ivory/70 underline-offset-4 transition-colors hover:text-ivory hover:underline"
        >
          Or reach us through the contact page
        </Link>
      </motion.div>
    </section>
  );
}