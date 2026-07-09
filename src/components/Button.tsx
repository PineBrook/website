import * as React from "react";
import { cn } from "../lib/utils";
import { ArrowRight } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm" | "lg";
  withArrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", withArrow, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-primary disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-brand-primary text-white hover:bg-brand-primary/90 shadow-[0_0_10px_rgba(0,122,255,0.3)] hover:shadow-[0_0_15px_rgba(0,122,255,0.5)]": variant === "primary",
            "border border-white/10 bg-transparent hover:bg-white/5 text-white": variant === "secondary",
            "border border-brand-primary text-brand-primary hover:bg-brand-primary/10": variant === "outline",
            "h-10 px-6 py-2": size === "default",
            "h-8 rounded-lg px-3 text-xs": size === "sm",
            "h-12 rounded-lg px-8 text-base": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="flex items-center gap-2">
          {children}
          {withArrow && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
        </span>
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };

