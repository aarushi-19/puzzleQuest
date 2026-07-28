import { Heart } from "lucide-react";

type JourneyHeaderProps = {
  recipient: string;
  occasion: string;
  title: string;
};

export default function JourneyHeader({
  recipient,
  occasion,
  title,
}: JourneyHeaderProps) {
  return (
    <header className="mb-10 rounded-3xl bg-[#F8F3EA] p-10 shadow-lg">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F3E4DE]">
          <Heart
            className="h-8 w-8 text-[#D69A8C]"
            fill="currentColor"
          />
        </div>

        <p className="mt-5 text-sm uppercase tracking-[0.3em] text-[#7D8E74]">
          Preview
        </p>

        <h1 className="mt-3 text-5xl font-serif text-[#3A3028]">
          {title || "Our Journey Together"}
        </h1>

        <div className="mt-6 flex flex-wrap justify-center gap-8 text-lg text-[#6B5F52]">
          <span>👤 {recipient || "Someone Special"}</span>

          <span>🎁 {occasion}</span>
        </div>

        <p className="mt-8 max-w-xl italic text-[#7D8E74]">
          Made with love, just for you ♡
        </p>
      </div>
    </header>
  );
}