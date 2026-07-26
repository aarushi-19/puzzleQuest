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
    <div className="mb-8 rounded-3xl bg-[#F8F3EA] p-8 shadow-lg">
      <p className="text-sm uppercase tracking-[0.3em] text-[#7D8E74]">
        Preview
      </p>

      <h1 className="mt-2 text-5xl font-serif text-[#3A3028]">
        {title || "Our Journey Together"}
      </h1>

      <div className="mt-4 flex flex-wrap gap-6 text-lg text-[#6B5F52]">
        <span>👤 {recipient || "Someone Special"}</span>

        <span>🎁 {occasion}</span>
      </div>

      <p className="mt-6 italic text-[#7D8E74]">
        Made with love, just for you ♡
      </p>
    </div>
  );
}