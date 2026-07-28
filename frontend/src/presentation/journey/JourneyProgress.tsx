type JourneyProgressProps = {
  total: number;
  completed: number;
};

export default function JourneyProgress({
  total,
  completed,
}: JourneyProgressProps) {
  return (
    <div className="mt-12">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-semibold text-[#4B3F34]">
          Journey Progress
        </h3>

        <span className="text-[#7D8E74]">
          {completed} / {total}
        </span>
      </div>

      <div className="flex gap-3">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`h-4 flex-1 rounded-full transition-all duration-500 ${
              index < completed
                ? "bg-[#D69A8C]"
                : "bg-[#E7DED2]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}