import Image from "next/image";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { MenuItemCard } from "@/components/ui/menu-item-card";
import { menuItems, categories, categorySlug, type MenuCategory } from "@/lib/menu";

const categoryEmoji: Record<MenuCategory, string> = {
  "Espresso Drinks": "☕",
  "Cold Drinks": "🧋",
  Pastries: "🥐",
  Sandwiches: "🥪",
};

const categoryTagline: Record<MenuCategory, string> = {
  "Espresso Drinks": "Pulled fresh every morning. Beans roasted in-house.",
  "Cold Drinks": "Bright, bold, and built for any weather.",
  Pastries: "Baked daily by James and the kitchen team.",
  Sandwiches: "Seasonal ingredients. Proper portions.",
};

export default function MenuPage() {
  const grouped = categories.reduce(
    (acc, cat) => {
      acc[cat] = menuItems.filter((i) => i.category === cat);
      return acc;
    },
    {} as Record<MenuCategory, typeof menuItems>,
  );

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />

      {/* ── Menu Hero ── */}
      <section className="relative h-[45vh] min-h-[300px] -mt-[72px]">
        <Image
          src="/images/menu-hero.webp"
          alt="Brew & Co. menu and coffee bar"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-espresso/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <p className="font-body text-xs text-caramel-muted uppercase tracking-widest mb-3">
            Brew & Co.
          </p>
          <h1 className="font-display font-black text-6xl md:text-7xl text-milk leading-none mb-4">
            Our Menu
          </h1>
          <p className="font-body text-milk/60 text-lg max-w-sm leading-relaxed">
            Made fresh. Sourced carefully. Served with care.
          </p>
        </div>
      </section>

      {/* ── Sticky Category Tabs ── */}
      <div className="sticky top-0 z-40 bg-cream border-b border-espresso/10 shadow-card">
        <div className="max-w-6xl mx-auto px-8 flex items-center gap-2 py-4 overflow-x-auto">
          {categories.map((cat) => (
            <a
              key={cat}
              href={`#${categorySlug(cat)}`}
              className={[
                "flex-shrink-0 flex items-center gap-2 rounded-full px-5 py-2",
                "font-body text-sm font-medium transition-colors duration-150",
                "text-espresso/60 hover:text-espresso hover:bg-espresso/8",
              ].join(" ")}
            >
              <span>{categoryEmoji[cat]}</span>
              <span>{cat}</span>
            </a>
          ))}
        </div>
      </div>

      {/* ── Menu Sections ── */}
      <main className="max-w-6xl mx-auto w-full px-8 md:px-16 py-16 space-y-20 flex-1">
        {categories.map((cat) => (
          <section
            key={cat}
            id={categorySlug(cat)}
            className="scroll-mt-24"
          >
            {/* Section header */}
            <div className="flex items-end gap-4 mb-8 pb-5 border-b border-espresso/10">
              <div className="w-12 h-12 rounded-full bg-caramel/15 flex items-center justify-center text-2xl flex-shrink-0">
                {categoryEmoji[cat]}
              </div>
              <div>
                <h2 className="font-display font-bold text-3xl text-espresso leading-none">
                  {cat}
                </h2>
                <p className="font-body text-sm text-espresso/50 mt-1">
                  {categoryTagline[cat]}
                </p>
              </div>
            </div>

            {/* Items grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {grouped[cat].map((item) => (
                <MenuItemCard
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  badge={item.badge}
                  pexelsId={item.pexelsId}
                />
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}
