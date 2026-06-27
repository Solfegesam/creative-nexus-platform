import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      className={`w-full rounded-lg border border-slate-700 bg-slate-800 p-4 outline-none transition focus:border-yellow-400 ${className}`}
      {...props}
    />
  );
}