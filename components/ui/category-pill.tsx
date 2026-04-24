export interface CategoryPillProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  active?: boolean;
  onClick?: () => void;
}

export function CategoryPill({
  icon,
  label,
  color,
  active = false,
  onClick,
}: CategoryPillProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-2 group cursor-pointer"
    >
      <div
        className={[
          "w-14 h-14 rounded-full flex items-center justify-center",
          "transition-all duration-200 group-hover:scale-105 group-hover:shadow-warm",
          active
            ? "ring-2 ring-espresso/30 ring-offset-2 ring-offset-cream scale-105"
            : "",
        ].join(" ")}
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>
      <span
        className={[
          "text-xs font-medium uppercase tracking-widest font-body",
          "transition-colors duration-150",
          active ? "text-espresso" : "text-espresso/55 group-hover:text-espresso/80",
        ].join(" ")}
      >
        {label}
      </span>
    </button>
  );
}
