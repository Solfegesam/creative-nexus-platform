type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
};

export default function ProjectCard({
  title,
  category,
  description,
}: ProjectCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-yellow-400">
      <div className="flex h-52 items-center justify-center bg-slate-800">
        <span className="text-slate-500">
          Project Preview
        </span>
      </div>

      <div className="p-6">
        <span className="rounded-full bg-yellow-400/10 px-3 py-1 text-sm text-yellow-400">
          {category}
        </span>

        <h3 className="mt-4 text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-3 text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
}