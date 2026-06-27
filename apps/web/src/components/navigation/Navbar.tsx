import { Link, NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-yellow-400"
        >
          Creative Nexus
        </Link>

        <div className="hidden gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-yellow-400 font-medium"
                  : "text-slate-300 hover:text-yellow-400 transition"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="rounded-lg bg-yellow-400 px-5 py-2 font-semibold text-black transition hover:bg-yellow-300"
        >
          Start Project
        </Link>
      </div>
    </nav>
  );
}