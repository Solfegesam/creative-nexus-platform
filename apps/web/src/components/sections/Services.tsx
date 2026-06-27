import ServiceCard from "../ui/ServiceCard";
import { services } from "../../data/services";

export default function Services() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Our Services
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            We combine creativity, technology and strategy to help brands and
            organizations grow.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}