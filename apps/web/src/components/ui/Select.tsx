import { SelectHTMLAttributes } from "react";

type Props = SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({
  className = "",
  children,
  ...props
}: Props) {
  return (
    <select
      className={`w-full rounded-lg border border-slate-700 bg-slate-800 p-4 outline-none transition focus:border-yellow-400 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}