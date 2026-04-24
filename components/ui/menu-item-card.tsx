import Image from "next/image";
import { Badge } from "./badge";
import type { BadgeProps } from "./badge";

export interface MenuItemCardProps {
  name: string;
  description: string;
  price: number;
  badge?: string | null;
  pexelsId: number;
  className?: string;
}

const badgeVariantMap: Record<string, BadgeProps["variant"]> = {
  Popular: "caramel",
  "House Favorite": "rose",
  New: "sage",
};

function pexelsUrl(id: number): string {
  return `/images/${id}.webp`;
}

export function MenuItemCard({
  name,
  description,
  price,
  badge,
  pexelsId,
  className = "",
}: MenuItemCardProps) {
  return (
    <div
      className={[
        "bg-milk/60 hover:bg-milk rounded-card overflow-hidden",
        "shadow-card hover:shadow-lifted transition-all duration-200 group",
        className,
      ].join(" ")}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={pexelsUrl(pexelsId)}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {badge && badgeVariantMap[badge] && (
          <div className="absolute top-3 left-3">
            <Badge variant={badgeVariantMap[badge]}>{badge}</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display font-bold text-lg text-espresso leading-snug flex-1">
            {name}
          </h3>
          <span className="font-body font-semibold text-caramel text-base flex-shrink-0 mt-0.5">
            £{price.toFixed(2)}
          </span>
        </div>
        <p className="font-body text-sm text-espresso/60 leading-relaxed mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}
