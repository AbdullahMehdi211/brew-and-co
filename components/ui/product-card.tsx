export interface ProductCardProps {
  name: string;
  price: number;
  emoji?: string;
  circleBg?: string;
  className?: string;
}

export function ProductCard({
  name,
  price,
  emoji = "☕",
  circleBg = "#D4A847",
  className = "",
}: ProductCardProps) {
  return (
    <div
      className={[
        "flex items-center gap-4 p-4 rounded-card",
        "bg-milk/60 hover:bg-milk hover:shadow-card",
        "transition-all duration-200 cursor-pointer group",
        className,
      ].join(" ")}
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-2xl
                   transition-transform duration-200 group-hover:scale-105"
        style={{ backgroundColor: circleBg }}
      >
        {emoji}
      </div>
      <div className="min-w-0">
        <h3 className="font-medium text-espresso font-body truncate">{name}</h3>
        <p className="text-caramel font-semibold font-body mt-0.5">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
