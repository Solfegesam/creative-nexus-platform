import type { LucideIcon } from "lucide-react";

import Card from "./Card";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <Card className="p-8">
      <div className="mb-6 inline-flex rounded-xl bg-yellow-400/10 p-4">
        <Icon
          size={32}
          className="text-yellow-400"
        />
      </div>

      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-400">
        {description}
      </p>
    </Card>
  );
}