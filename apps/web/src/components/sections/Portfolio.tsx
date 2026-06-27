import { portfolio } from "../../data/portfolio";
import ProjectCard from "../ui/ProjectCard";

export default function Portfolio() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-400">
            Some of the creative, educational and technology
            solutions delivered by Creative Nexus.
          </p>
        </div>

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
      </div>
    </section>
  );
}