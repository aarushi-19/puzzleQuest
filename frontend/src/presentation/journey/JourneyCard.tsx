import {
  Lock,
  CheckCircle2,
  Puzzle,
} from "lucide-react";

import type { Memory } from "../../domain/entities/Gift";

type JourneyCardProps = {
  memory: Memory;
  index: number;
  onStart: () => void;
  onView: () => void;
};

export default function JourneyCard({
  memory,
  index,
  onStart,
  onView,
}: JourneyCardProps) {
  const isLocked = memory.status === "locked";
  const isCompleted = memory.status === "completed";
  const isAvailable = memory.status === "available";

  return (
    <div className="rounded-3xl border border-[#E6DDD1] bg-white p-8 shadow-lg transition hover:shadow-xl">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-[#3A3028]">
          {memory.title || `Memory ${index + 1}`}
        </h2>

        {isLocked && (
          <Lock className="h-6 w-6 text-gray-400" />
        )}

        {isCompleted && (
          <CheckCircle2 className="h-6 w-6 text-green-500" />
        )}

        {isAvailable && (
          <Puzzle className="h-6 w-6 text-[#D69A8C]" />
        )}
      </div>

      <p className="mt-4 text-[#6B5F52]">
        {isLocked &&
          "Complete the previous memory to unlock this one."}

        {isAvailable &&
          "Ready to solve your next puzzle!"}

        {isCompleted &&
          "You've already unlocked this memory."}
      </p>

      {isAvailable && (
        <button
          onClick={onStart}
          className="mt-8 w-full rounded-2xl bg-[#D69A8C] py-3 font-semibold text-white transition hover:bg-[#C88979]"
        >
          Start Puzzle
        </button>
      )}

      {isCompleted && (
        <button
          onClick={onView}
          className="mt-8 w-full rounded-2xl border border-[#D69A8C] py-3 font-semibold text-[#D69A8C] transition hover:bg-[#F8EBE7]"
        >
          View Memory
        </button>
      )}
    </div>
  );
}