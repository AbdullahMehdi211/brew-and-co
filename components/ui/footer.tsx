import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About Us", href: "/about" },
] as const;

const hours = [
  { days: "Mon – Fri", time: "6:00 am – 8:00 pm" },
  { days: "Saturday",  time: "7:00 am – 9:00 pm" },
] as const;

export function Footer() {
  return (
    <footer className="bg-espresso text-milk">
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-display font-black text-2xl text-milk tracking-tight"
          >
            <span>☕</span>
            <span>Brew & Co.</span>
          </Link>
          <p className="font-body text-milk/50 text-sm leading-relaxed mt-4 max-w-xs">
            London&apos;s coziest corner. Specialty coffee, seasonal pastries,
            and a seat that feels like yours.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-milk/40 hover:text-milk transition-colors duration-150"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://tiktok.com"
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
              className="text-milk/40 hover:text-milk transition-colors duration-150"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.53V6.77a4.86 4.86 0 01-1.01-.08z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-body font-semibold text-xs text-milk/40 uppercase tracking-widest mb-5">
            Navigate
          </h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-sm text-milk/60 hover:text-milk transition-colors duration-150"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="font-body font-semibold text-xs text-milk/40 uppercase tracking-widest mb-5">
            Opening Hours
          </h3>
          <dl className="space-y-3">
            {hours.map(({ days, time }) => (
              <div key={days}>
                <dt className="font-body text-sm text-milk/50">{days}</dt>
                <dd className="font-body text-sm text-milk font-medium">{time}</dd>
              </div>
            ))}
          </dl>
          <p className="font-body text-xs text-caramel-muted mt-4">
            Kitchen closes 30 min before closing.
          </p>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-body font-semibold text-xs text-milk/40 uppercase tracking-widest mb-5">
            Find Us
          </h3>
          <address className="not-italic font-body text-sm text-milk/60 leading-relaxed">
            42 Columbia Road
            <br />
            Shoreditch
            <br />
            London E2 7RG
          </address>
          <a
            href="https://maps.google.com/?q=42+Columbia+Road+London+E2+7RG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-body text-sm text-caramel-muted hover:text-caramel transition-colors duration-150 mt-4"
          >
            Get Directions
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-milk/10 px-8 md:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-body text-xs text-milk/30">
          © 2025 Brew & Co. All rights reserved.
        </p>
        <p className="font-body text-xs text-milk/20">
          42 Columbia Road, Shoreditch, London E2 7RG
        </p>
      </div>
    </footer>
  );
}
