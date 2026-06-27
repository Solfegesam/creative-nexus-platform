type Props = {
  value: string;
  label: string;
};

export default function StatCard({
  value,
  label,
}: Props) {
  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold text-yellow-400">
        {value}
      </h3>

      <p className="mt-2 text-slate-400">
        {label}
      </p>
    </div>
  );
}