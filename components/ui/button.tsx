import { type ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "outline-light";
type Size = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-espresso text-milk hover:bg-espresso-light",
  secondary:
    "bg-caramel text-milk hover:bg-caramel-hover",
  ghost:
    "bg-transparent text-espresso hover:bg-espresso/10",
  outline:
    "bg-transparent border border-espresso/25 text-espresso hover:bg-espresso/5",
  "outline-light":
    "bg-transparent border border-milk/40 text-milk hover:bg-milk/10",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-5 text-sm gap-1.5",
  md: "h-11 px-7 text-sm gap-2",
  lg: "h-14 px-9 text-base gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", className = "", children, ...props },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={[
          "inline-flex items-center justify-center font-body font-medium rounded-full",
          "transition-all duration-150 active:scale-[0.97] cursor-pointer",
          "disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className,
        ].join(" ")}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
