import type { InputHTMLAttributes } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({
  label,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium text-[#433B32]">
        {label}
      </label>

      <input
        {...props}
        className={`
          rounded-xl
          border
          border-[#DDD6CB]
          bg-white
          px-4
          py-3
          outline-none
          transition
          focus:border-[#6F8F72]
          ${className}
        `}
      />
    </div>
  );
}