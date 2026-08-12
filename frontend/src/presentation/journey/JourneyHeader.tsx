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
    <header className="text-center">
      <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#7d8e74]">
        Your Journey
      </p>

      <h1
        className="mt-3 text-4xl font-semibold text-[#3a3028] md:text-5xl"
        style={{
          fontFamily: "'Playfair Display', serif",
        }}
      >
        {title || "Our Journey Together"}
      </h1>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-lg text-[#6b5f52]">
        <span>
          👤 {recipient || "Someone Special"}
        </span>

        <span>
          🎁 {occasion || "A Special Day"}
        </span>
      </div>

      <p className="mt-6 text-[#7d8e74]">
        Made with love, just for you ♡
      </p>
    </header>
  );
}