import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Render in light text for dark backgrounds (e.g. the footer). */
  invert?: boolean;
}

/**
 * Typographic wordmark — rendered as text rather than an image so it
 * scales cleanly at any size and needs no logo asset.
 */
export function Logo({ className, invert = false }: LogoProps) {
  return (
    <span
      className={cn(
        "whitespace-nowrap font-serif font-medium uppercase leading-none tracking-[0.03em]",
        invert ? "text-ivory" : "text-charcoal",
        className
      )}
    >
      Lines <span className="text-black">&amp;</span> Designs
    </span>
  );
}
