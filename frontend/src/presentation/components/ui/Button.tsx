import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary: `
      bg-[#D79A8A]
      text-white
      hover:bg-[#CB8C7D]
      shadow-[0_15px_35px_rgba(213,154,138,0.35)]
      hover:shadow-[0_20px_40px_rgba(213,154,138,0.45)]
    `,

    secondary: `
      bg-[#7B9978]
      text-white
      hover:bg-[#688765]
      shadow-[0_15px_35px_rgba(123,153,120,0.30)]
      hover:shadow-[0_20px_40px_rgba(123,153,120,0.40)]
    `,

    outline: `
      bg-white/80
      border-2
      border-[#7B9978]
      text-[#7B9978]
      backdrop-blur-md
      hover:bg-[#7B9978]
      hover:text-white
    `,
  };

  return (
    <button
      {...props}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2

        rounded-2xl

        px-8
        py-4

        text-lg
        font-semibold

        transition-all
        duration-300

        hover:-translate-y-1
        active:translate-y-0

        focus:outline-none
        focus:ring-4
        focus:ring-[#D79A8A]/20

        ${variants[variant]}

        ${className}
      `}
    >
      {children}
    </button>
  );
}