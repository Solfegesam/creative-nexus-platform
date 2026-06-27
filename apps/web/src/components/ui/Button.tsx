import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "rounded-lg px-6 py-3 font-semibold transition duration-300";

  const variants = {
    primary:
      "bg-yellow-400 text-black hover:bg-yellow-300",

    secondary:
      "border border-slate-700 text-white hover:border-yellow-400 hover:text-yellow-400",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}