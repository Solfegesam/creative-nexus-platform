import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ServiceCard from "../common/ServiceCard";

import { services } from "../../data/services";

export default function Services() {
  return (
    <section className="bg-slate-900 py-24">
      <Container>
        <SectionTitle
          title="Our Services"
          subtitle="Creative Nexus provides modern digital and creative solutions designed to help individuals, businesses and organizations grow."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}