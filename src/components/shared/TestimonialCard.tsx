import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-charcoal/8 bg-ivory p-7 shadow-sm shadow-charcoal/[0.03] sm:p-9">
      <Quote className="h-7 w-7 text-oak/60" />
      <blockquote className="mt-5 flex-1 font-serif text-lg leading-relaxed text-charcoal sm:text-xl">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-7 border-t border-charcoal/8 pt-5">
        <p className="font-sans text-sm font-semibold text-charcoal">{t.name}</p>
        <p className="mt-0.5 font-sans text-xs text-muted">
          {t.context} · {t.project}
        </p>
      </figcaption>
    </figure>
  );
}