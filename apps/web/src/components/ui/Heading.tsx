type HeadingProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
};

export default function Heading({
  title,
  subtitle,
  center = true,
}: HeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-4xl font-bold md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-6 max-w-3xl text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}