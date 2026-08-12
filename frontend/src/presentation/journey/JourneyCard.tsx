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
    <article
      className={`
        rounded-3xl
        border
        p-6
        transition
        md:p-8
        ${
          isLocked
            ? "border-[#e6ddd1] bg-[#f7f4ef]"
            : isCompleted
              ? "border-[#d8e1d2] bg-white"
              : "border-[#e6ddd1] bg-white shadow-sm"
        }
      `}
    >
      {/* Header */}

      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#9f8b73]">
            Memory {index + 1}
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-[#4b3f34]">
            {memory.title || `Memory ${index + 1}`}
          </h2>
        </div>

        {/* Status icon */}

        {isLocked && (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ebe7e1]">
            <Lock className="h-5 w-5 text-[#9b948c]" />
          </div>
        )}

        {isCompleted && (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e7efe3]">
            <CheckCircle2 className="h-6 w-6 text-[#7d9974]" />
          </div>
        )}

        {isAvailable && (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f8ebe7]">
            <Puzzle className="h-6 w-6 text-[#d69a8c]" />
          </div>
        )}
      </div>

      {/* Description */}

      <p className="mt-5 leading-7 text-[#6b5f52]">
        {isLocked &&
          "Complete the previous memory to unlock this one."}

        {isAvailable &&
          "Ready to solve your next puzzle!"}

        {isCompleted &&
          "You've already unlocked this memory."}
      </p>

      {/* Action */}

      {isAvailable && (
        <button
          type="button"
          onClick={onStart}
          className="
            mt-7
            w-full
            rounded-full
            bg-[#d69a8c]
            py-3.5
            font-semibold
            text-white
            transition
            hover:bg-[#c78879]
          "
        >
          Start Puzzle →
        </button>
      )}

      {isCompleted && (
        <button
          type="button"
          onClick={onView}
          className="
            mt-7
            w-full
            rounded-full
            border
            border-[#d69a8c]
            bg-white
            py-3.5
            font-semibold
            text-[#b57767]
            transition
            hover:bg-[#f8ebe7]
          "
        >
          View Memory →
        </button>
      )}
    </article>
  );
}