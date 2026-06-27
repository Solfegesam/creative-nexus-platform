import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ProjectCard from "../common/ProjectCard";

import { portfolio } from "../../data/portfolio";

export default function Portfolio() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          title="Featured Projects"
          subtitle="A selection of our recent work across web development, digital marketing and creative production."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              description={project.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}