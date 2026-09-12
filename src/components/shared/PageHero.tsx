import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  image?: string;
  compact?: boolean;
}

export function PageHero({ eyebrow, title, description, image, compact = false }: PageHeroProps) {
  const onImage = Boolean(image);
  return (
    <section
      className={`relative flex w-full overflow-hidden items-end ${
        onImage ? (compact ? "min-h-[42svh]" : "min-h-[56svh]") : "pt-36"
      }`}
    >
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/30 to-charcoal/10" />
        </>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`relative mx-auto w-full max-w-7xl px-5 sm:px-8 ${onImage ? "pt-40" : ""}`}
      >
        {eyebrow && (
          <p className={`mb-4 flex items-center gap-3 font-sans text-[0.7rem] uppercase tracking-[0.32em] ${onImage ? "text-oak" : "text-oak-dark"}`}>
            <span className={`h-px w-10 ${onImage ? "bg-oak" : "bg-oak-dark"}`} />
            {eyebrow}
          </p>
        )}
        <h1
          className={`max-w-3xl font-serif text-5xl font-medium leading-[1.05] sm:text-6xl md:text-7xl ${
            onImage ? "text-ivory" : "text-charcoal"
          }`}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`mt-6 max-w-xl pb-16 font-sans text-base leading-relaxed sm:text-lg ${
              onImage ? "text-ivory/85" : "text-muted"
            }`}
          >
            {description}
          </p>
        )}
      </motion.div>
    </section>
  );
}