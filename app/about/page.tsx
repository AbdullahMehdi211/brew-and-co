import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { BookingModal } from "@/components/ui/booking-modal";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: "◆",
    title: "Quality",
    description:
      "We source seasonally and roast in-house. Every cup is dialled in fresh each morning, and we pull every shot by hand.",
  },
  {
    icon: "○",
    title: "Community",
    description:
      "This café exists because of the people who walk through the door. We remember your name and your order.",
  },
  {
    icon: "◎",
    title: "Sustainability",
    description:
      "Oat milk by default. Compostable packaging. Beans sourced directly from farms we've visited ourselves.",
  },
  {
    icon: "✦",
    title: "Craft",
    description:
      "We don't automate what doesn't need automating. Espresso is pulled by hand. Pastries are made by ours.",
  },
] as const;

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative h-[65vh] -mt-[72px]">
        <Image
          src="/images/about-hero.webp"
          alt="Brew & Co. coffee shop"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-espresso/60" />
        <div className="absolute bottom-0 left-0 px-8 md:px-16 py-16">
          <p className="font-body text-xs text-caramel-muted uppercase tracking-widest mb-3">
            Shoreditch, London · Est. 2019
          </p>
          <h1 className="font-display font-black text-6xl md:text-7xl text-milk leading-none">
            Our Story
          </h1>
        </div>
      </section>

      {/* ── Founders Story ── */}
      <section className="bg-cream px-8 md:px-16 py-24">
        <div className="max-w-5xl mx-auto">
          {/* Intro */}
          <div className="max-w-2xl mb-20">
            <p className="font-body text-xs text-caramel uppercase tracking-widest mb-4">
              How it started
            </p>
            <p className="font-display font-bold text-3xl text-espresso leading-snug">
              Brew & Co. was born from a chance meeting at Broadway Market on a
              rainy Saturday in 2017. Two strangers. One market stall. One
              shared obsession with where coffee comes from.
            </p>
          </div>

          {/* Founder cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Mia */}
            <div>
              <div className="relative h-80 rounded-card overflow-hidden mb-6 shadow-card">
                <Image
                  src="/images/founder-mia.webp"
                  alt="Mia Chen, Co-founder"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              <p className="font-body text-xs text-caramel uppercase tracking-widest mb-1">
                Co-founder & Head Roaster
              </p>
              <h2 className="font-display font-bold text-2xl text-espresso mb-3">
                Mia Chen
              </h2>
              <p className="font-body text-base text-espresso/65 leading-relaxed">
                Mia grew up in Hong Kong watching her grandmother brew gongfu
                cha with the kind of patience most people reserve for
                meditation. She spent eight years as a green buyer and head
                roaster for a specialty importer in Central, before moving to
                London in 2015 chasing a curiosity she couldn&apos;t name. She
                found it in Hackney.
              </p>
            </div>

            {/* James */}
            <div>
              <div className="relative h-80 rounded-card overflow-hidden mb-6 shadow-card">
                <Image
                  src="/images/founder-james.webp"
                  alt="James Whitfield, Co-founder"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              <p className="font-body text-xs text-caramel uppercase tracking-widest mb-1">
                Co-founder & Head of Food
              </p>
              <h2 className="font-display font-bold text-2xl text-espresso mb-3">
                James Whitfield
              </h2>
              <p className="font-body text-base text-espresso/65 leading-relaxed">
                James is from Hackney. Properly from Hackney — born at the
                Homerton, schooled on Queensbridge Road. He trained as a chef,
                spent five years in open-fire kitchens in Hoxton and Peckham,
                and developed an obsession with fermentation and seasonality.
                He never meant to open a coffee shop. And then he met Mia.
              </p>
            </div>
          </div>

          {/* Closing narrative */}
          <div className="max-w-2xl">
            <p className="font-body text-lg text-espresso/70 leading-relaxed border-l-4 border-caramel/30 pl-6">
              They opened Brew & Co. on Redchurch Street in Shoreditch in the
              spring of 2019 with six tables, one grinder, and a conviction
              that a neighbourhood café should feel like it belongs to the
              neighbourhood.
            </p>
            <p className="font-body text-lg text-espresso/70 leading-relaxed border-l-4 border-caramel/30 pl-6 mt-4">
              It does.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-espresso px-8 md:px-16 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="font-body text-xs text-caramel-muted uppercase tracking-widest mb-2">
              What guides us
            </p>
            <h2 className="font-display font-bold text-4xl text-milk">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, description }) => (
              <div
                key={title}
                className="bg-milk/8 border border-milk/10 rounded-card p-8"
              >
                <div className="w-12 h-12 rounded-full bg-caramel/20 flex items-center justify-center mb-5 text-xl text-caramel-muted">
                  {icon}
                </div>
                <h3 className="font-display font-bold text-xl text-milk mb-3">
                  {title}
                </h3>
                <p className="font-body text-sm text-milk/55 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visit CTA ── */}
      <section className="bg-cream px-8 md:px-16 py-20 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="font-display font-bold text-4xl text-espresso mb-4">
            Come say hello.
          </h2>
          <p className="font-body text-espresso/60 text-lg leading-relaxed mb-8">
            42 Columbia Road, Shoreditch. Monday to Friday from 7am. We&apos;d
            love to have you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <BookingModal />
            <Link href="/menu">
              <Button variant="outline">View Our Menu</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
