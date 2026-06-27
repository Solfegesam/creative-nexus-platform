type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-yellow-400">
      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 text-slate-400">
        {description}
      </p>

      <button className="mt-8 rounded-lg bg-yellow-400 px-5 py-3 font-semibold text-black">
        Learn More
      </button>
    </div>
  );
}