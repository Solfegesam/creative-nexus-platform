import Container from "../common/Container";
import Button from "../common/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32">
      <Container className="text-center">
        <span className="inline-block rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-yellow-400">
          Creative • Digital • Technology
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
          Building Powerful
          <span className="text-yellow-400">
            {" "}Digital Experiences
          </span>
          <br />
          For Modern Brands
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
          Creative Nexus helps businesses, educators,
          organizations, and creators build modern websites,
          powerful brands, digital marketing strategies, and
          creative media solutions that make an impact.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 md:flex-row">
          <Button>
            Start Your Project
          </Button>

          <Button variant="secondary">
            View Portfolio
          </Button>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-4xl font-bold text-yellow-400">
              20+
            </h3>
            <p className="mt-2 text-slate-400">
              Projects
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-400">
              10+
            </h3>
            <p className="mt-2 text-slate-400">
              Clients
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-400">
              5+
            </h3>
            <p className="mt-2 text-slate-400">
              Services
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-yellow-400">
              100%
            </h3>
            <p className="mt-2 text-slate-400">
              Commitment
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}