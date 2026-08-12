type JourneyProgressProps = {
  total: number;
  completed: number;
};

export default function JourneyProgress({
  total,
  completed,
}: JourneyProgressProps) {
  const progress =
    total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <section className="mt-10 rounded-3xl border border-[#e6ddd1] bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-semibold text-[#4b3f34]">
          Journey Progress
        </h2>

        <span className="text-sm font-medium text-[#7d8e74]">
          {completed} / {total}
        </span>
      </div>

      <div className="mt-5 flex gap-3">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`
              h-3
              flex-1
              rounded-full
              transition
              ${
                index < completed
                  ? "bg-[#d69a8c]"
                  : "bg-[#e7ded2]"
              }
            `}
          />
        ))}
      </div>

      <p className="mt-4 text-sm text-[#7b7066]">
        {total === 0
          ? "Your journey is waiting to begin."
          : progress === 100
            ? "You've completed the entire journey! ❤️"
            : `${progress}% of your memories unlocked.`}
      </p>
    </section>
  );
}