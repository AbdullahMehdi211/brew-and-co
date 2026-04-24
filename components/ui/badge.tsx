type Variant = "caramel" | "latte" | "sage" | "rose" | "espresso";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

const variants: Record<Variant, string> = {
  caramel: "bg-caramel/15 text-caramel",
  latte:   "bg-latte/20 text-espresso-dim",
  sage:    "bg-sage/15 text-sage",
  rose:    "bg-rose/15 text-rose",
  espresso:"bg-espresso/10 text-espresso",
};

export function Badge({ children, variant = "caramel", className = "" }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-3 py-1",
        "text-xs font-medium tracking-wide uppercase font-body",
        variants[variant],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
