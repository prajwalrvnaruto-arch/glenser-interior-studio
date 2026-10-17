import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Render in light text for dark backgrounds (e.g. the footer). */
  invert?: boolean;
  /** Play the letter-reveal entrance animation. */
  animated?: boolean;
}

/**
 * Typographic wordmark — rendered as individual letter spans so each
 * character can animate in sequentially on page load.
 *
 * The CSS class `logo-letter` (defined in index.css) drives the
 * keyframe animation; each letter gets a staggered animation-delay.
 */
export function Logo({ className, invert = false, animated = false }: LogoProps) {
  const WORD1 = "Lines";
  const WORD2 = "Designs";
  const AMP   = "&";

  // Each character in "Lines & Designs" gets its own span.
  const allChars = [
    ...WORD1.split(""),
    " ",
    AMP,
    " ",
    ...WORD2.split(""),
  ];

  const colorClass = invert ? "text-ivory" : "text-charcoal";
  const ampColorClass = invert ? "text-oak" : "text-oak";

  if (!animated) {
    return (
      <span
        className={cn(
          "whitespace-nowrap font-serif font-medium uppercase leading-none tracking-[0.06em]",
          colorClass,
          className
        )}
      >
        Lines <span className={ampColorClass}>&amp;</span> Designs
      </span>
    );
  }

  return (
    <span
      className={cn(
        "whitespace-nowrap font-serif font-medium uppercase leading-none tracking-[0.06em]",
        colorClass,
        className
      )}
      aria-label="Lines & Designs"
    >
      {allChars.map((char, i) => {
        const isAmp = char === AMP;
        const isSpace = char === " ";
        return (
          <span
            key={i}
            className={cn(
              "logo-letter",
              isAmp && ampColorClass,
              isSpace && "w-[0.3em]"
            )}
            style={{ animationDelay: `${i * 0.04}s` }}
            aria-hidden="true"
          >
            {isSpace ? "\u00A0" : char}
          </span>
        );
      })}
    </span>
  );
}
