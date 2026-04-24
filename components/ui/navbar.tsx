import Link from "next/link";
import { SearchInput } from "./search-input";

const links = [
  { label: "Home",     href: "/" },
  { label: "Menu",     href: "/menu" },
  { label: "About Us", href: "/about" },
] as const;

export interface NavbarProps {
  className?: string;
}

export function Navbar({ className = "" }: NavbarProps) {
  return (
    <nav
      className={[
        "flex items-center justify-between px-8 py-5",
        className,
      ].join(" ")}
    >
      <Link
        href="/"
        className="flex items-center gap-2 font-display text-xl font-black text-espresso tracking-tight"
      >
        <span className="text-2xl">☕</span>
        <span>Brew & Co.</span>
      </Link>

      <ul className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm font-body text-espresso/65 hover:text-espresso transition-colors duration-150"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <SearchInput placeholder="Search..." />
    </nav>
  );
}
