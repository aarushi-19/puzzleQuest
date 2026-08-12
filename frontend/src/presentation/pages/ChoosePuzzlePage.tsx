import { useNavigate } from "react-router-dom";
import { useGift } from "../../context/GiftContext";
import ProgressStepper from "../components/ProgressStepper";
import type { PuzzleType } from "../../domain/entities/Gift";

const puzzleTypes: {
  id: PuzzleType;
  emoji: string;
  title: string;
  description: string;
}[] = [
  {
    id: "jigsaw",
    emoji: "🧩",
    title: "Jigsaw",
    description: "Piece together the photo to reveal the memory.",
  },
  {
    id: "word-scramble",
    emoji: "🔤",
    title: "Word Scramble",
    description: "Unscramble the words to unlock the memory.",
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

  const handleContinue = () => {
    if (gift.memories.length === 0) {
      return;
    }

    navigate("/preview");
  };

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <ProgressStepper currentStep={3} />

        <div className="mt-10">

          {/* Step */}

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9f8b73]">
            Step 3 of 4
          </p>

          {/* Heading */}

          <h1 className="mt-3 text-4xl font-semibold text-[#4b3f34] md:text-5xl">
            Choose Your Puzzles
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#6b5f52]">
            Choose how each memory will be revealed to your loved one.
          </p>

          {/* Memories */}

          <div className="mt-10 space-y-8">
            {gift.memories.map((memory, memoryIndex) => (
              <section
                key={memory.id}
                className="
                  rounded-3xl
                  border
                  border-[#e8dfd2]
                  bg-white/80
                  p-6
                  shadow-sm
                  md:p-8
                "
              >
                <h2 className="text-2xl font-semibold text-[#4b3f34]">
                  {memory.title || `Memory ${memoryIndex + 1}`}
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                  {puzzleTypes.map((puzzle) => {
                    const selected =
                      memory.puzzle === puzzle.id;

                    return (
                      <button
                        key={puzzle.id}
                        type="button"
                        onClick={() =>
                          choosePuzzle(
                            memoryIndex,
                            puzzle.id
                          )
                        }
                        className={`
                          rounded-2xl
                          border
                          p-6
                          text-left
                          transition
                          duration-200
                          ${
                            selected
                              ? "border-[#d69a8c] bg-[#f8ebe7]"
                              : "border-[#e5ddd0] bg-white hover:border-[#d69a8c]"
                          }
                        `}
                      >
                        <div className="text-4xl">
                          {puzzle.emoji}
                        </div>

                        <h3 className="mt-4 text-xl font-semibold text-[#4b3f34]">
                          {puzzle.title}
                        </h3>

                        <p className="mt-2 leading-7 text-[#75695e]">
                          {puzzle.description}
                        </p>

                        {selected && (
                          <p className="mt-4 text-sm font-semibold text-[#b57767]">
                            ✓ Selected
                          </p>
                        )}
                      </button>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          {/* Continue */}

          <button
            type="button"
            onClick={handleContinue}
            className="
              mt-10
              w-full
              rounded-2xl
              bg-[#d69a8c]
              py-4
              text-lg
              font-semibold
              text-white
              transition
              hover:bg-[#c78879]
            "
          >
            Continue →
          </button>
        </div>
      </div>
    </main>
  );
}