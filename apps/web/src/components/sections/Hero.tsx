import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-400">
          Creative • Technology • Digital Marketing
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
          Building
          <span className="text-yellow-400">
            {" "}Creative Digital Solutions{" "}
          </span>
          That Make an Impact
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-300 md:text-xl">
          Creative Nexus helps businesses, educators, organizations and creators
          grow through modern web development, branding, digital marketing and
          creative media.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="rounded-lg bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:bg-yellow-300"
          >
            Start Your Project
          </Link>

          <Link
            to="/services"
            className="rounded-lg border border-slate-700 px-8 py-4 transition hover:border-yellow-400 hover:text-yellow-400"
          >
            Explore Services
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-4xl font-bold text-yellow-400">20+</h3>
            <p className="text-slate-400">Projects</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-400">10+</h3>
            <p className="text-slate-400">Clients</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-400">5+</h3>
            <p className="text-slate-400">Core Services</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-400">100%</h3>
            <p className="text-slate-400">Commitment</p>
          </div>
        </div>
      </div>
    </section>
  );
}