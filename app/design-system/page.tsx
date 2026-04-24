import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CategoryPill } from "@/components/ui/category-pill";
import { ProductCard } from "@/components/ui/product-card";
import { SearchInput } from "@/components/ui/search-input";
import { Navbar } from "@/components/ui/navbar";

/* ─── Design tokens for the swatch grids ─── */
const colors = [
  { name: "Cream",         token: "cream",         hex: "#F5EDD8", text: "dark" },
  { name: "Cream Muted",   token: "cream-muted",   hex: "#EDE0C4", text: "dark" },
  { name: "Milk",          token: "milk",           hex: "#FAF6EE", text: "dark" },
  { name: "Espresso",      token: "espresso",       hex: "#2D1810", text: "light" },
  { name: "Espresso Light",token: "espresso-light", hex: "#4A2C1E", text: "light" },
  { name: "Espresso Dim",  token: "espresso-dim",   hex: "#6B4435", text: "light" },
  { name: "Caramel",       token: "caramel",        hex: "#C8622A", text: "light" },
  { name: "Caramel Hover", token: "caramel-hover",  hex: "#B35220", text: "light" },
  { name: "Caramel Muted", token: "caramel-muted",  hex: "#D99060", text: "dark"  },
  { name: "Latte",         token: "latte",          hex: "#D4A847", text: "dark"  },
  { name: "Latte Muted",   token: "latte-muted",    hex: "#E8C070", text: "dark"  },
  { name: "Sage",          token: "sage",           hex: "#7B8C4A", text: "light" },
  { name: "Sage Muted",    token: "sage-muted",     hex: "#96A860", text: "dark"  },
  { name: "Rose",          token: "rose",           hex: "#C8856E", text: "light" },
  { name: "Rose Muted",    token: "rose-muted",     hex: "#E8A090", text: "dark"  },
] as const;

const typeScale = [
  { label: "Display / 72px", size: "text-7xl", weight: "font-black",  font: "font-display", sample: "Brew & Co." },
  { label: "H1 / 48px",      size: "text-5xl", weight: "font-bold",   font: "font-display", sample: "When Life Gives You Lemons" },
  { label: "H2 / 36px",      size: "text-4xl", weight: "font-bold",   font: "font-display", sample: "Chocolicious Shakes" },
  { label: "H3 / 24px",      size: "text-2xl", weight: "font-semibold",font: "font-display", sample: "Our Signature Menu" },
  { label: "Lead / 20px",    size: "text-xl",  weight: "font-normal", font: "font-body",    sample: "Pure cocoa goodness in every sip." },
  { label: "Body / 16px",    size: "text-base",weight: "font-normal", font: "font-body",    sample: "Shake up your taste buds with a chocolate delight. Chill out with our chocolicious shakes." },
  { label: "Small / 14px",   size: "text-sm",  weight: "font-normal", font: "font-body",    sample: "Available in regular and large. Customise with your favourite toppings." },
  { label: "Caption / 12px", size: "text-xs",  weight: "font-medium", font: "font-body",    sample: "COFFEE · DRINKS · TEA · BAKERY" },
] as const;

const categories = [
  { label: "Coffee", color: "#C8856E", icon: "☕" },
  { label: "Drinks",  color: "#7BC8C0", icon: "🧋" },
  { label: "Tea",     color: "#E8A090", icon: "🍵" },
  { label: "Bakery",  color: "#D4A847", icon: "🧁" },
] as const;

const products = [
  { name: "Nutella Mudslide",    price: 30, emoji: "🍫", circleBg: "#C8856E" },
  { name: "Caramel Frappuccino", price: 40, emoji: "☕", circleBg: "#D4A847" },
  { name: "Hot Chocolate",       price: 35, emoji: "🍵", circleBg: "#D99060" },
  { name: "Matcha Latte",        price: 38, emoji: "🍃", circleBg: "#96A860" },
] as const;

/* ─── Section wrapper ─── */
function Section({
  title,
  subtitle,
  children,
  dark = false,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section
      className={[
        "px-8 md:px-16 py-16",
        dark ? "bg-espresso text-milk" : "bg-cream",
      ].join(" ")}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p
            className={[
              "text-xs font-body font-medium tracking-widest uppercase mb-2",
              dark ? "text-caramel-muted" : "text-caramel",
            ].join(" ")}
          >
            {subtitle ?? "Design System"}
          </p>
          <h2
            className={[
              "font-display font-bold text-4xl leading-tight",
              dark ? "text-milk" : "text-espresso",
            ].join(" ")}
          >
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

/* ─── Color swatch ─── */
function Swatch({
  name,
  token,
  hex,
  text,
}: {
  name: string;
  token: string;
  hex: string;
  text: "dark" | "light";
}) {
  return (
    <div className="rounded-card overflow-hidden shadow-card">
      <div
        className="h-20 w-full"
        style={{ backgroundColor: hex }}
      />
      <div className="bg-milk p-3">
        <p className="text-espresso font-body font-medium text-sm">{name}</p>
        <p className="text-espresso/50 font-mono text-xs mt-0.5">{hex}</p>
        <p className="text-espresso/40 font-mono text-xs">bg-{token}</p>
      </div>
    </div>
  );
}

/* ─── Spec chip ─── */
function Spec({ label, value, inverted = false }: { label: string; value: string; inverted?: boolean }) {
  return (
    <div
      className={[
        "inline-flex flex-col items-start gap-0.5 rounded-sm px-3 py-2",
        inverted ? "bg-milk/10" : "bg-espresso/5",
      ].join(" ")}
    >
      <span
        className={[
          "text-[10px] font-body font-medium uppercase tracking-widest",
          inverted ? "text-milk/40" : "text-espresso/40",
        ].join(" ")}
      >
        {label}
      </span>
      <span
        className={[
          "text-sm font-mono font-medium",
          inverted ? "text-milk" : "text-espresso",
        ].join(" ")}
      >
        {value}
      </span>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* ── Hero Header ── */}
      <header className="bg-espresso text-milk">
        <div className="max-w-6xl mx-auto">
          <Navbar className="border-b border-milk/10" />
          <div className="px-8 md:px-16 py-20">
            <Badge variant="caramel" className="mb-6">
              v1.0
            </Badge>
            <h1 className="font-display font-black text-6xl md:text-8xl leading-none tracking-tight text-milk mb-6">
              Design<br />
              <span className="text-caramel-muted">System</span>
            </h1>
            <p className="font-body text-milk/60 text-xl max-w-md leading-relaxed">
              Tokens, components, and patterns for the Brew & Co. product
              experience. Built with Next.js, Tailwind CSS v4, and TypeScript.
            </p>
            <div className="flex flex-wrap gap-3 mt-10">
              <Spec label="Framework"  value="Next.js 16"  inverted />
              <Spec label="Styling"    value="Tailwind v4" inverted />
              <Spec label="Language"   value="TypeScript"  inverted />
              <Spec label="Display"    value="Fraunces"    inverted />
              <Spec label="Body"       value="DM Sans"     inverted />
            </div>
          </div>
        </div>
      </header>

      {/* ── Color Palette ── */}
      <Section title="Color Palette" subtitle="Foundations">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {colors.map((c) => (
            <Swatch key={c.token} {...c} />
          ))}
        </div>

        {/* Semantic usage guide */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { role: "Background",  sample: "bg-cream",    desc: "Page & section base" },
            { role: "Surface",     sample: "bg-milk",     desc: "Cards & overlays" },
            { role: "Primary CTA", sample: "bg-espresso", desc: "Main action buttons" },
            { role: "Accent",      sample: "bg-caramel",  desc: "Prices, links, icons" },
          ].map((r) => (
            <div key={r.role} className="flex items-start gap-3 p-4 bg-milk/60 rounded-card">
              <div className={`w-8 h-8 rounded-full flex-shrink-0 mt-0.5 ${r.sample}`} />
              <div>
                <p className="font-body font-medium text-espresso text-sm">{r.role}</p>
                <p className="font-mono text-xs text-espresso/40 mt-0.5">{r.sample}</p>
                <p className="font-body text-xs text-espresso/60 mt-1">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Typography ── */}
      <Section title="Typography" subtitle="Foundations" dark>
        <div className="space-y-10">
          {typeScale.map((t) => (
            <div
              key={t.label}
              className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8 pb-8 border-b border-milk/10 last:border-0 last:pb-0"
            >
              <div className="flex-shrink-0 w-36">
                <p className="font-body text-xs text-milk/40 uppercase tracking-widest">
                  {t.label}
                </p>
              </div>
              <p
                className={[
                  "text-milk leading-tight flex-1",
                  t.size,
                  t.weight,
                  t.font,
                ].join(" ")}
              >
                {t.sample}
              </p>
            </div>
          ))}
        </div>

        {/* Font specs */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-milk/5 rounded-card p-6 border border-milk/10">
            <p className="font-body text-xs text-caramel-muted uppercase tracking-widest mb-3">
              Display · Fraunces
            </p>
            <p className="font-display text-5xl font-black text-milk leading-none mb-4">Aa</p>
            <p className="font-body text-sm text-milk/60 leading-relaxed">
              A warm, optically lively serif variable font. Used for all
              headline text. Evokes the handcrafted, artisanal feel of the
              brand.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["400", "600", "700", "900"].map((w) => (
                <span key={w} className="bg-milk/10 text-milk/70 text-xs font-mono px-2 py-1 rounded-sm">
                  {w}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-milk/5 rounded-card p-6 border border-milk/10">
            <p className="font-body text-xs text-caramel-muted uppercase tracking-widest mb-3">
              Body · DM Sans
            </p>
            <p className="font-body text-5xl font-bold text-milk leading-none mb-4">Aa</p>
            <p className="font-body text-sm text-milk/60 leading-relaxed">
              A clean, geometric sans-serif. Used for all body copy, UI labels,
              and interactive elements. Pairs naturally with Fraunces.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["300", "400", "500", "700"].map((w) => (
                <span key={w} className="bg-milk/10 text-milk/70 text-xs font-mono px-2 py-1 rounded-sm">
                  {w}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Buttons ── */}
      <Section title="Buttons" subtitle="Components">
        <div className="space-y-8">
          {/* Variants */}
          <div>
            <p className="font-body text-sm text-espresso/50 uppercase tracking-widest mb-4">
              Variants
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary">Get Promo</Button>
              <Button variant="secondary">Order Now</Button>
              <Button variant="outline">Learn More</Button>
              <Button variant="ghost">See All</Button>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <p className="font-body text-sm text-espresso/50 uppercase tracking-widest mb-4">
              Sizes
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="lg">Large Button</Button>
              <Button size="md">Medium Button</Button>
              <Button size="sm">Small Button</Button>
            </div>
          </div>

          {/* With icons */}
          <div>
            <p className="font-body text-sm text-espresso/50 uppercase tracking-widest mb-4">
              With Icon
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary">
                <span>▶</span>
                Get Promo
              </Button>
              <Button variant="secondary">
                Add to Cart
                <span>+</span>
              </Button>
              <Button variant="outline" disabled>
                Sold Out
              </Button>
            </div>
          </div>
        </div>

        {/* Spec table */}
        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-sm font-body">
            <thead>
              <tr className="border-b border-espresso/10 text-left">
                {["Variant", "Background", "Text", "Use case"].map((h) => (
                  <th key={h} className="pb-3 pr-8 text-xs uppercase tracking-widest text-espresso/40 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-espresso/70">
              {[
                ["primary",  "bg-espresso",  "text-milk",     "Primary CTA, main actions"],
                ["secondary","bg-caramel",   "text-milk",     "Promotional, secondary CTA"],
                ["outline",  "transparent",  "text-espresso", "Tertiary actions, navigation"],
                ["ghost",    "transparent",  "text-espresso", "In-context links, subtle actions"],
              ].map(([variant, bg, text, use]) => (
                <tr key={variant} className="border-b border-espresso/5">
                  <td className="py-3 pr-8 font-mono text-xs text-espresso">{variant}</td>
                  <td className="py-3 pr-8 font-mono text-xs">{bg}</td>
                  <td className="py-3 pr-8 font-mono text-xs">{text}</td>
                  <td className="py-3">{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── Badges ── */}
      <Section title="Badges" subtitle="Components" dark>
        <div className="flex flex-wrap gap-3">
          <Badge variant="caramel">Coffee</Badge>
          <Badge variant="latte">Seasonal</Badge>
          <Badge variant="sage">Vegan</Badge>
          <Badge variant="rose">New Arrival</Badge>
          <Badge variant="espresso">Bestseller</Badge>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          {[
            { v: "caramel",  bg: "bg-caramel/15",  text: "text-caramel",      border: "border-caramel/20" },
            { v: "latte",    bg: "bg-latte/20",    text: "text-espresso-dim", border: "border-latte/30" },
            { v: "sage",     bg: "bg-sage/15",     text: "text-sage",         border: "border-sage/20" },
            { v: "rose",     bg: "bg-rose/15",     text: "text-rose",         border: "border-rose/20" },
            { v: "espresso", bg: "bg-espresso/10", text: "text-espresso",     border: "border-espresso/15" },
          ].map((b) => (
            <div key={b.v} className="bg-milk/10 rounded-card p-4 text-milk/60 font-mono text-xs leading-relaxed">
              <p className="text-caramel-muted mb-1 uppercase tracking-widest text-[10px]">variant: {b.v}</p>
              <p>{b.bg}</p>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Category Pills ── */}
      <Section title="Category Pills" subtitle="Components">
        <div className="flex flex-wrap gap-8 items-end">
          {categories.map((c, i) => (
            <CategoryPill
              key={c.label}
              icon={<span className="text-2xl">{c.icon}</span>}
              label={c.label}
              color={c.color}
              active={i === 0}
            />
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { prop: "icon",   type: "React.ReactNode", desc: "Icon or emoji displayed inside the circle" },
            { prop: "label",  type: "string",           desc: "Text label shown below the circle" },
            { prop: "color",  type: "string (hex/css)", desc: "Background color of the circle" },
            { prop: "active", type: "boolean",          desc: "Shows ring and scale treatment when selected" },
            { prop: "onClick",type: "() => void",       desc: "Click handler for selection state" },
          ].map((p) => (
            <div key={p.prop} className="flex gap-3 text-sm font-body">
              <span className="font-mono text-caramel text-xs bg-caramel/10 px-2 py-0.5 rounded-xs h-fit mt-0.5">
                {p.prop}
              </span>
              <div>
                <p className="font-mono text-xs text-espresso/40">{p.type}</p>
                <p className="text-espresso/60 text-xs mt-0.5">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Product Cards ── */}
      <Section title="Product Cards" subtitle="Components" dark>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
        <div className="mt-8 bg-milk/5 rounded-card p-6 border border-milk/10">
          <p className="font-body text-xs text-caramel-muted uppercase tracking-widest mb-4">
            Usage
          </p>
          <pre className="font-mono text-xs text-milk/70 leading-relaxed overflow-x-auto">
{`<ProductCard
  name="Nutella Mudslide"
  price={30}
  emoji="🍫"
  circleBg="#C8856E"
/>`}
          </pre>
        </div>
      </Section>

      {/* ── Inputs ── */}
      <Section title="Search Input" subtitle="Components">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-6 items-center">
            <div>
              <p className="font-body text-xs text-espresso/40 uppercase tracking-widest mb-3">
                Default
              </p>
              <SearchInput placeholder="Search our menu..." />
            </div>
          </div>
          <div className="bg-milk/60 rounded-card p-5 text-sm font-body text-espresso/60 space-y-1.5 max-w-lg">
            <p>
              <span className="font-medium text-espresso">Expand on focus</span> — width transitions from
              {" "}<code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded-xs">w-44</code> to{" "}
              <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded-xs">w-56</code>.
            </p>
            <p>
              <span className="font-medium text-espresso">Ring on focus</span> — caramel{" "}
              <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded-xs">ring-2 ring-caramel/10</code>.
            </p>
            <p>
              <span className="font-medium text-espresso">Client Component</span> — uses{" "}
              <code className="font-mono text-xs bg-espresso/5 px-1.5 py-0.5 rounded-xs">"use client"</code> for focus state.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Spacing & Radius ── */}
      <Section title="Spacing & Radius" subtitle="Foundations" dark>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Spacing */}
          <div>
            <p className="font-body text-xs text-caramel-muted uppercase tracking-widest mb-6">
              Spacing Scale
            </p>
            <div className="space-y-3">
              {[
                { name: "2",  px: "8px",  class: "w-2" },
                { name: "4",  px: "16px", class: "w-4" },
                { name: "6",  px: "24px", class: "w-6" },
                { name: "8",  px: "32px", class: "w-8" },
                { name: "12", px: "48px", class: "w-12" },
                { name: "16", px: "64px", class: "w-16" },
                { name: "20", px: "80px", class: "w-20" },
                { name: "24", px: "96px", class: "w-24" },
              ].map((s) => (
                <div key={s.name} className="flex items-center gap-4">
                  <div
                    className={`h-6 bg-caramel-muted rounded-xs ${s.class}`}
                  />
                  <span className="font-mono text-xs text-milk/50">{s.class}</span>
                  <span className="font-mono text-xs text-milk/30">{s.px}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Border radius */}
          <div>
            <p className="font-body text-xs text-caramel-muted uppercase tracking-widest mb-6">
              Border Radius
            </p>
            <div className="space-y-4">
              {[
                { name: "rounded-xs",   value: "0.25rem / 4px",   cls: "rounded-xs" },
                { name: "rounded-sm",   value: "0.5rem / 8px",    cls: "rounded-sm" },
                { name: "rounded-md",   value: "0.375rem / 6px",  cls: "rounded-md" },
                { name: "rounded-card", value: "1.5rem / 24px",   cls: "rounded-card" },
                { name: "rounded-full", value: "9999px",           cls: "rounded-full" },
              ].map((r) => (
                <div key={r.name} className="flex items-center gap-4">
                  <div
                    className={`w-16 h-10 bg-caramel-muted/60 border border-caramel-muted flex-shrink-0 ${r.cls}`}
                  />
                  <div>
                    <p className="font-mono text-xs text-milk/70">{r.name}</p>
                    <p className="font-mono text-xs text-milk/35">{r.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Footer ── */}
      <footer className="bg-espresso border-t border-milk/10 px-8 md:px-16 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-display font-black text-2xl text-milk tracking-tight">
            ☕ Brew & Co.
          </p>
          <p className="font-body text-xs text-milk/30">
            Design System v1.0 · Built with Next.js 16 + Tailwind CSS v4
          </p>
        </div>
      </footer>
    </div>
  );
}
