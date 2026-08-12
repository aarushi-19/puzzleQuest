import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-3xl
        bg-white
        p-8
        shadow-lg
        ${className}
      `}
    >
      {children}
    </div>
  );
}