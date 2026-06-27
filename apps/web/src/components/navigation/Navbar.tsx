import { Link } from "react-router-dom";

import Container from "@/components/common/Container";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-yellow-400"
        >
          Creative Nexus
        </Link>

        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="transition hover:text-yellow-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}