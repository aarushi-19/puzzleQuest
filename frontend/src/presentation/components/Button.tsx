import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
};

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full rounded-2xl bg-[#d69a8c] py-4 text-lg font-semibold text-white transition hover:bg-[#cb8c7d] ${className}`}
    >
      {children}
    </button>
  );
}