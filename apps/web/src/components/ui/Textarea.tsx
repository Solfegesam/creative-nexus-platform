import { TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({
  className = "",
  ...props
}: Props) {
  return (
    <textarea
      className={`w-full rounded-lg border border-slate-700 bg-slate-800 p-4 outline-none transition focus:border-yellow-400 ${className}`}
      {...props}
    />
  );
}