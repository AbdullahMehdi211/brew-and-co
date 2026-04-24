import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { BookingModal } from "@/components/ui/booking-modal";
import { Button } from "@/components/ui/button";
import { MenuItemCard } from "@/components/ui/menu-item-card";
import { popularItems } from "@/lib/menu";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center text-center -mt-[72px]">
        <Image
          src="/images/home-hero.webp"
          alt="Brew & Co. coffee shop interior"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/75 via-espresso/50 to-espresso/85" />
        <div className="relative z-10 px-8 max-w-3xl mx-auto">
          <p className="font-body text-xs text-caramel-muted uppercase tracking-widest mb-5">
            Shoreditch, London
          </p>
          <h1 className="font-display font-black text-6xl md:text-8xl text-milk leading-none mb-6">
            London&apos;s coziest corner.
          </h1>
          <p className="font-body text-milk/65 text-xl max-w-md mx-auto mb-10 leading-relaxed">
            Specialty coffee, seasonal pastries, and a spot that feels like yours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <BookingModal />
            <Link href="/menu">
              <Button variant="outline-light" size="lg">Browse Menu</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Popular Items ── */}
      <section className="bg-cream px-8 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="font-body text-xs text-caramel uppercase tracking-widest mb-2">
              On every table
            </p>
            <h2 className="font-display font-bold text-4xl text-espresso">
              The Crowd Favourites
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {popularItems.map((item) => (
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
          <div className="mt-10 text-center">
            <Link href="/menu">
              <Button variant="outline" size="md">View Full Menu</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Events Banner ── */}
      <section className="bg-espresso px-8 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="font-body text-xs text-caramel-muted uppercase tracking-widest mb-2">
              Live at Brew & Co.
            </p>
            <h2 className="font-display font-bold text-4xl text-milk">
              Something&apos;s Always On
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Open Mic */}
            <div className="bg-milk/8 border border-milk/10 rounded-card p-8">
              <div className="w-12 h-12 rounded-full bg-caramel/20 flex items-center justify-center mb-5 text-2xl">
                🎵
              </div>
              <p className="font-body text-xs text-caramel-muted uppercase tracking-widest mb-2">
                Every Friday Evening
              </p>
              <h3 className="font-display font-bold text-2xl text-milk mb-3">
                Open Mic Night
              </h3>
              <p className="font-body text-sm text-milk/60 leading-relaxed mb-6">
                Doors open at 7pm. Free entry. Acoustic sets, spoken word, and
                the occasional surprise guest. Grab a glass, pull up a chair.
              </p>
              <Link
                href="/about"
                className="font-body text-sm text-caramel-muted hover:text-caramel transition-colors duration-150 inline-flex items-center gap-1"
              >
                Learn more
                <span>→</span>
              </Link>
            </div>

            {/* Coffee Tasting */}
            <div className="bg-milk/8 border border-milk/10 rounded-card p-8">
              <div className="w-12 h-12 rounded-full bg-latte/20 flex items-center justify-center mb-5 text-2xl">
                ☕
              </div>
              <p className="font-body text-xs text-caramel-muted uppercase tracking-widest mb-2">
                Every Saturday Morning
              </p>
              <h3 className="font-display font-bold text-2xl text-milk mb-3">
                Coffee Tasting Sessions
              </h3>
              <p className="font-body text-sm text-milk/60 leading-relaxed mb-6">
                9am sharp. Learn the story behind our beans, how we pull the
                perfect shot, and taste through three origins. Tickets: £12
                including pastry.
              </p>
              <Link
                href="/about"
                className="font-body text-sm text-caramel-muted hover:text-caramel transition-colors duration-150 inline-flex items-center gap-1"
              >
                Learn more
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Booking Hero ── */}
      <section className="relative min-h-[70vh] flex items-center">
        <Image
          src="/images/booking-hero.webp"
          alt="Brew & Co. cozy interior"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/96 via-espresso/80 to-transparent" />
        <div className="relative z-10 px-8 md:px-16 max-w-lg">
          <p className="font-body text-xs text-caramel-muted uppercase tracking-widest mb-4">
            Reserve your spot
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-milk leading-tight mb-4">
            Find Your Seat
          </h2>
          <p className="font-body text-milk/60 text-lg mb-8 leading-relaxed">
            Walk-ins always welcome. Reservations guaranteed.
          </p>
          <dl className="space-y-2 mb-10">
            {[
              { days: "Mon – Fri", time: "6:00 am – 8:00 pm" },
              { days: "Saturday",  time: "7:00 am – 9:00 pm" },
            ].map(({ days, time }) => (
              <div key={days} className="flex gap-6 items-baseline">
                <dt className="font-body text-sm text-milk/45 w-24 flex-shrink-0">{days}</dt>
                <dd className="font-body text-sm text-milk font-medium">{time}</dd>
              </div>
            ))}
          </dl>
          <BookingModal />
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
