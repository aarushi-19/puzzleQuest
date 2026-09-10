import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useGift } from "../../context/GiftContext";
import PuzzleBoard from "../puzzle/PuzzleBoard";
import WordScramble from "../puzzle/WordScramble";

export default function PuzzlePage() {
  const navigate = useNavigate();
  const { memoryId } = useParams();

  const { gift, setGift } = useGift();

  const memory = gift.memories.find(
    (item) => item.id === memoryId
  );

  const [imageUrl, setImageUrl] =
    useState<string | null>(null);

  const [showReveal, setShowReveal] =
    useState(false);

  /*
   * Whenever we move to a different memory,
   * start that memory from the puzzle screen.
   */

  useEffect(() => {
    setShowReveal(false);
  }, [memoryId]);

  /*
   * Create a temporary URL for the uploaded image.
   */

  useEffect(() => {
    if (!memory?.image) {
      setImageUrl(null);
      return;
    }

    const url = URL.createObjectURL(memory.image);

    setImageUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [memory?.image]);

  /*
   * Memory not found.
   */

  if (!memory) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#edf2e8] px-6">
        <div className="text-center">

          <h1 className="text-3xl font-semibold text-[#4b3f34]">
            Memory not found
          </h1>

          <button
            type="button"
            onClick={() => navigate("/journey")}
            className="
              mt-6
              rounded-full
              bg-[#d69a8c]
              px-8
              py-3
              font-semibold
              text-white
              transition
              hover:bg-[#c78879]
            "
          >
            Back to Journey
          </button>

        </div>
      </main>
    );
  }

  /*
   * Find the current memory.
   */

  const currentIndex =
    gift.memories.findIndex(
      (item) => item.id === memoryId
    );

  /*
   * Find the next memory.
   */

  const nextMemory =
    currentIndex !== -1
      ? gift.memories[currentIndex + 1]
      : undefined;

  /*
   * Mark the current memory as completed
   * and unlock the next memory.
   */

  function handlePuzzleSolved() {
    if (!memoryId) {
      return;
    }

    const index =
      gift.memories.findIndex(
        (item) => item.id === memoryId
      );

    if (index === -1) {
      return;
    }

    const updatedMemories =
      gift.memories.map(
        (item, memoryIndex) => {

          /*
           * Complete current memory.
           */

          if (memoryIndex === index) {
            return {
              ...item,
              status: "completed" as const,
            };
          }

          /*
           * Unlock next memory.
           */

          if (
            memoryIndex === index + 1 &&
            item.status === "locked"
          ) {
            return {
              ...item,
              status: "available" as const,
            };
          }

          return item;
        }
      );

    setGift({
      ...gift,
      memories: updatedMemories,
    });

    /*
     * Show the original photograph
     * and the memory story.
     */

    setShowReveal(true);
  }

  /*
   * Continue directly to the next puzzle.
   */

  function handleContinue() {
    if (nextMemory) {
      navigate(
        `/puzzle/${nextMemory.id}`
      );

      return;
    }

    navigate("/journey");
  }

  /*
   * ==========================================
   * MEMORY REVEAL SCREEN
   * ==========================================
   */

  if (showReveal) {
    return (
      <main
        className="
          min-h-screen
          bg-[#edf2e8]
          px-6
          py-10
        "
      >

        <div className="mx-auto max-w-4xl">

          {/* Header */}

          <div className="text-center">

            <p
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-[#b9966d]
              "
            >
              Memory Unlocked
            </p>

            <h1
              className="
                mt-4
                text-5xl
                font-serif
                font-semibold
                text-[#4b3f34]
                md:text-6xl
              "
            >
              {memory.title ||
                "A Special Memory"}
            </h1>

          </div>

          {/* Original Photo */}

          {imageUrl ? (
            <div
              className="
                mt-10
                overflow-hidden
                rounded-[32px]
                border
                border-[#e6ddd1]
                bg-white
                p-4
                shadow-2xl
                md:p-6
              "
            >
              <img
                src={imageUrl}
                alt={
                  memory.title ||
                  "Completed memory"
                }
                className="
                  mx-auto
                  max-h-[65vh]
                  w-full
                  rounded-2xl
                  object-contain
                "
              />
            </div>
          ) : (
            <div
              className="
                mt-10
                flex
                h-80
                items-center
                justify-center
                rounded-3xl
                bg-white
                text-[#6d6257]
                shadow-lg
              "
            >
              No photo was uploaded
              for this memory.
            </div>
          )}

          {/* Memory Story */}

          <div
            className="
              mx-auto
              mt-8
              max-w-3xl
              rounded-[32px]
              border
              border-[#e6ddd1]
              bg-[#fffdf9]
              px-8
              py-10
              shadow-lg
              md:px-12
              md:py-12
            "
          >

            <div className="text-center">

              <div className="text-5xl">
                ❤️
              </div>

              <p
                className="
                  mt-5
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#9f8b73]
                "
              >
                The Story Behind This Memory
              </p>

            </div>

            <p
              className="
                mt-7
                whitespace-pre-wrap
                text-center
                text-lg
                leading-9
                text-[#5c5148]
              "
            >
              {memory.story ||
                "This memory doesn't have a story yet."}
            </p>

          </div>

          {/* Continue */}

          <div
            className="
              mt-8
              flex
              flex-col
              items-center
              gap-4
            "
          >

            {nextMemory ? (
              <>
                <button
                  type="button"
                  onClick={handleContinue}
                  className="
                    w-full
                    max-w-md
                    rounded-2xl
                    bg-[#d69a8c]
                    px-8
                    py-4
                    text-lg
                    font-semibold
                    text-white
                    shadow-lg
                    transition
                    hover:-translate-y-1
                    hover:bg-[#c78879]
                    hover:shadow-xl
                  "
                >
                  Continue to Next Memory →
                </button>

                <p
                  className="
                    text-sm
                    text-[#8b7c70]
                  "
                >
                  Next:{" "}
                  <span className="font-semibold">
                    {nextMemory.title ||
                      `Memory ${
                        currentIndex + 2
                      }`}
                  </span>
                </p>
              </>
            ) : (
              <>
                <div className="text-center">

                  <h3
                    className="
                      text-2xl
                      font-serif
                      font-semibold
                      text-[#4b3f34]
                    "
                  >
                    🎉 Your Journey Is Complete
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[#6d6257]
                    "
                  >
                    Every memory has been
                    unlocked.
                  </p>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    navigate("/journey")
                  }
                  className="
                    w-full
                    max-w-md
                    rounded-2xl
                    bg-[#d69a8c]
                    px-8
                    py-4
                    text-lg
                    font-semibold
                    text-white
                    shadow-lg
                    transition
                    hover:-translate-y-1
                    hover:bg-[#c78879]
                    hover:shadow-xl
                  "
                >
                  Finish Journey ❤️
                </button>
              </>
            )}

            <button
              type="button"
              onClick={() =>
                navigate("/journey")
              }
              className="
                text-sm
                font-medium
                text-[#8b6f47]
                underline
                underline-offset-4
                transition
                hover:text-[#d69a8c]
              "
            >
              Back to Journey
            </button>

          </div>

        </div>

      </main>
    );
  }

  /*
   * ==========================================
   * PUZZLE SCREEN
   * ==========================================
   */

  const puzzleDescription =
    memory.puzzle === "jigsaw"
      ? "Put the pieces together to reveal this memory."
      : "Unscramble the letters to reveal this memory.";

  return (
    <main
      className="
        min-h-screen
        bg-[#edf2e8]
        px-6
        py-10
      "
    >

      <div className="mx-auto max-w-5xl">

        {/* Back */}

        <button
          type="button"
          onClick={() =>
            navigate("/journey")
          }
          className="
            mb-6
            text-sm
            font-medium
            text-[#8b6f47]
            transition
            hover:text-[#d69a8c]
          "
        >
          ← Back to Journey
        </button>

        {/* Header */}

        <div className="text-center">

          <p
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.3em]
              text-[#b9966d]
            "
          >
            Memory Puzzle
          </p>

          {/* IMPORTANT:
              The memory title has been removed here.
              It should NOT be visible before the puzzle
              is solved.
          */}

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-lg
              leading-8
              text-[#6d6257]
            "
          >
            {puzzleDescription}
          </p>

        </div>

        {/* Puzzle */}

        <div className="mt-10">

          {/* JIGSAW */}

          {memory.puzzle === "jigsaw" && (
            <>
              {!memory.image ? (
                <div
                  className="
                    rounded-3xl
                    bg-white
                    p-10
                    text-center
                    shadow-lg
                  "
                >

                  <h2
                    className="
                      text-2xl
                      font-semibold
                      text-[#4b3f34]
                    "
                  >
                    This memory has no photo
                  </h2>

                  <p
                    className="
                      mt-3
                      text-[#6d6257]
                    "
                  >
                    A photo is needed to create
                    this puzzle.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      navigate("/journey")
                    }
                    className="
                      mt-6
                      rounded-full
                      bg-[#d69a8c]
                      px-8
                      py-3
                      font-semibold
                      text-white
                      transition
                      hover:bg-[#c78879]
                    "
                  >
                    Back to Journey
                  </button>

                </div>
              ) : !imageUrl ? (
                <div
                  className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    py-16
                  "
                >

                  <div className="text-5xl">
                    🧩
                  </div>

                  <p
                    className="
                      mt-5
                      text-lg
                      text-[#6d6257]
                    "
                  >
                    Preparing your puzzle...
                  </p>

                </div>
              ) : (
                <PuzzleBoard
                  imageUrl={imageUrl}
                  size={3}
                  onSolved={
                    handlePuzzleSolved
                  }
                />
              )}
            </>
          )}

          {/* WORD SCRAMBLE */}

          {memory.puzzle ===
            "word-scramble" && (
            <WordScramble
              key={memoryId}
              title={
                memory.title ||
                "Special Memory"
              }
              onComplete={
                handlePuzzleSolved
              }
            />
          )}

        </div>

      </div>

    </main>
  );
}