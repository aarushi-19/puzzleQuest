import type { ReactNode } from "react";
import wallpaper from "../../assets/backgrounds/daisy.webp";

interface BackgroundProps {
  children: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#E6EBD8]">
      {/* Daisy pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url(${wallpaper})`,
          backgroundRepeat: "repeat",
          backgroundSize: "340px",
        }}
      />

      {/* Soft gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top, rgba(255,255,255,.45), transparent 55%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}