import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[7rem] w-full rounded-none border-b border-charcoal/15 bg-transparent px-0 py-3.5 font-sans text-[0.95rem] text-charcoal placeholder:text-muted/70 transition-colors focus-visible:border-oak focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-none aria-invalid:border-oxide aria-invalid:focus-visible:border-oxide",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };