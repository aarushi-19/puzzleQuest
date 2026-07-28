import { useNavigate } from "react-router-dom";
import { useGift } from "../../context/GiftContext";
import ProgressStepper from "../components/ProgressStepper";
import type { PuzzleType } from "../../domain/entities/Gift";

const puzzleTypes: {
  id: PuzzleType;
  emoji: string;
  title: string;
}[] = [
  {
    id: "jigsaw",
    emoji: "🧩",
    title: "Jigsaw",
  },
  {
    id: "word-scramble",
    emoji: "🔤",
    title: "Word Scramble",
  },
];

export default function ChoosePuzzlePage() {
  const navigate = useNavigate();
  const { gift, setGift } = useGift();

  const choosePuzzle = (
    memoryIndex: number,
    puzzle: PuzzleType
  ) => {
    const updatedMemories = [...gift.memories];

    updatedMemories[memoryIndex] = {
      ...updatedMemories[memoryIndex],
      puzzle,
    };

    setGift({
      ...gift,
      memories: updatedMemories,
    });
  };

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-6xl rounded-[36px] border border-[#e6ddd1] bg-white/75 p-10 shadow-2xl backdrop-blur-md">
        <ProgressStepper currentStep={3} />

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.25em] text-[#9f8b73]">
          STEP 3 OF 4
        </p>

        <h1 className="mt-3 text-5xl font-bold text-[#4b3f34]">
          Choose a Puzzle for Every Memory
        </h1>

        <p className="mt-4 text-lg text-[#6b5f52]">
          Choose one of two puzzle types for each memory.
        </p>

        <div className="mt-12 space-y-10">
          {gift.memories.map((memory, memoryIndex) => (
            <div
              key={memory.id}
              className="rounded-3xl border border-[#e8dfd2] bg-[#fcfaf7] p-8 shadow-md"
            >
              <h2 className="mb-8 text-3xl font-bold text-[#4b3f34]">
                {memory.title || `Memory ${memoryIndex + 1}`}
              </h2>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {puzzleTypes.map((puzzle) => (
                  <button
                    key={puzzle.id}
                    onClick={() =>
                      choosePuzzle(memoryIndex, puzzle.id)
                    }
                    className={`rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-1 ${
                      memory.puzzle === puzzle.id
                        ? "border-[#d69a8c] bg-[#f8ebe7] shadow-lg"
                        : "border-[#e5ddd0] bg-white hover:border-[#d69a8c]"
                    }`}
                  >
                    <div className="text-6xl">{puzzle.emoji}</div>

                    <h3 className="mt-5 text-xl font-semibold text-[#4b3f34]">
                      {puzzle.title}
                    </h3>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("/preview")}
          className="mt-12 w-full rounded-2xl bg-[#d69a8c] py-4 text-lg font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#c78879]"
        >
          Continue →
        </button>
      </div>
    </main>
  );
}