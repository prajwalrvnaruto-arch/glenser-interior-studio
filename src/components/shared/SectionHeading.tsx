import { cn } from "@/lib/utils";
import { AnimatedSection } from "./AnimatedSection";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Render in light text for dark section backgrounds. */
  invert?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
  className,
}: SectionHeadingProps) {
  return (
    <AnimatedSection
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-4 font-sans text-[0.7rem] uppercase tracking-[0.3em] text-oak">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.15] font-medium",
          invert ? "text-ivory" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 font-sans text-base leading-relaxed",
            invert ? "text-ivory/75" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}