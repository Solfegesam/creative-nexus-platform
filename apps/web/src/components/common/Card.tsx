import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-yellow-400
        ${className}
      `}
    >
      {children}
    </div>
  );
}