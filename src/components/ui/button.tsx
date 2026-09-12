import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium font-sans transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oak focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-charcoal text-ivory hover:bg-charcoal/90 hover:shadow-lg hover:shadow-charcoal/15",
        accent:
          "bg-oak text-charcoal hover:bg-oak-dark hover:shadow-lg hover:shadow-oak/30",
        outline:
          "border border-charcoal/20 bg-transparent text-charcoal hover:border-charcoal hover:bg-charcoal/[0.03]",
        ghost: "text-charcoal hover:bg-charcoal/[0.05]",
        white: "bg-ivory/90 text-charcoal backdrop-blur-sm hover:bg-ivory",
        light:
          "border border-ivory/40 bg-ivory/10 text-ivory backdrop-blur-md hover:bg-ivory/20",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5 text-[0.85rem]",
        lg: "h-14 px-9 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };