type SectionProps = {
  title: string;
};

function Section({ title }: SectionProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-bold">{title}</h2>
      </div>
    </section>
  );
}

export default function CTA() {
  return <Section title="Call To Action" />;
}