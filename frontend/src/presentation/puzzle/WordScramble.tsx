import { useEffect, useMemo, useState } from "react";

type WordScrambleProps = {
  title: string;
  onComplete: () => void;
};

type Letter = {
  id: string;
  letter: string;
};

export default function WordScramble({
  title,
  onComplete,
}: WordScrambleProps) {
  /*
   * Remove spaces and punctuation because
   * the puzzle is based on individual letters.
   */

  const answer = useMemo(() => {
    return title
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "");
  }, [title]);

  /*
   * Create a genuinely shuffled version.
   *
   * We make sure it is NOT already equal
   * to the correct answer.
   */

  function createShuffledLetters(): Letter[] {
    const characters = answer.split("");

    if (characters.length <= 1) {
      return characters.map((letter, index) => ({
        id: `${letter}-${index}`,
        letter,
      }));
    }

    let shuffled = [...characters];

    let attempts = 0;

    do {
      shuffled = [...characters].sort(
        () => Math.random() - 0.5
      );

      attempts++;
    } while (
      shuffled.join("") === answer &&
      attempts < 20
    );

    return shuffled.map((letter, index) => ({
      id: `${letter}-${index}-${Math.random()}`,
      letter,
    }));
  }

  const [letters, setLetters] =
    useState<Letter[]>(() =>
      createShuffledLetters()
    );

  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  const [checked, setChecked] =
    useState(false);

  const [correct, setCorrect] =
    useState(false);

  /*
   * Reset the puzzle whenever the title changes.
   */

  useEffect(() => {
    setLetters(createShuffledLetters());
    setSelectedIndex(null);
    setChecked(false);
    setCorrect(false);
  }, [answer]);

  /*
   * Swap two letters.
   */

  function swapLetters(
    firstIndex: number,
    secondIndex: number
  ) {
    if (firstIndex === secondIndex) {
      return;
    }

    setLetters((previous) => {
      const updated = [...previous];

      const temporary =
        updated[firstIndex];

      updated[firstIndex] =
        updated[secondIndex];

      updated[secondIndex] =
        temporary;

      return updated;
    });

    /*
     * Changing the arrangement means
     * the previous answer is no longer valid.
     */

    setChecked(false);
    setCorrect(false);
  }

  /*
   * Click one letter, then another
   * to swap their positions.
   */

  function handleLetterClick(index: number) {
    if (selectedIndex === null) {
      setSelectedIndex(index);
      return;
    }

    swapLetters(
      selectedIndex,
      index
    );

    setSelectedIndex(null);
  }

  /*
   * Check the answer.
   */

  function handleCheck() {
    const currentAnswer =
      letters
        .map((item) => item.letter)
        .join("");

    const isCorrect =
      currentAnswer === answer;

    setChecked(true);
    setCorrect(isCorrect);
    setSelectedIndex(null);
  }

  /*
   * Shuffle again.
   */

  function handleShuffleAgain() {
    setLetters(createShuffledLetters());
    setSelectedIndex(null);
    setChecked(false);
    setCorrect(false);
  }

  return (
    <div
      className="
        mx-auto
        flex
        max-w-4xl
        flex-col
        items-center
      "
    >

      {/* Icon */}

      <div className="text-6xl">
        🔤
      </div>

      {/* Heading */}

      <h2
        className="
          mt-5
          text-center
          text-3xl
          font-serif
          font-semibold
          text-[#4b3f34]
        "
      >
        Unscramble this memory
      </h2>

      <p
        className="
          mt-3
          text-center
          text-[#6d6257]
        "
      >
        Arrange the letters to reveal
        the memory title.
      </p>

      {/* Letter Board */}

      <div
        className="
          mt-10
          flex
          max-w-full
          flex-wrap
          justify-center
          gap-3
          rounded-3xl
          bg-[#f8f4ef]
          p-7
          shadow-lg
        "
      >
        {letters.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() =>
              handleLetterClick(index)
            }
            className={`
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              border-2
              bg-white
              text-2xl
              font-bold
              text-[#4b3f34]
              shadow-md
              transition-all
              duration-200
              hover:-translate-y-1
              hover:shadow-lg

              ${
                selectedIndex === index
                  ? `
                    scale-105
                    border-[#d69a8c]
                    bg-[#f8ebe7]
                  `
                  : `
                    border-[#ddd2c4]
                  `
              }
            `}
          >
            {item.letter}
          </button>
        ))}
      </div>

      {/* Instructions */}

      {!checked && (
        <p
          className="
            mt-5
            text-center
            text-sm
            text-[#8b7c70]
          "
        >
          Click two letters to swap
          their positions.
        </p>
      )}

      {/* Check Answer */}

      {!correct && (
        <button
          type="button"
          onClick={handleCheck}
          className="
            mt-8
            rounded-2xl
            bg-[#d69a8c]
            px-12
            py-4
            text-lg
            font-semibold
            text-white
            shadow-lg
            transition
            duration-300
            hover:-translate-y-1
            hover:bg-[#c78879]
            hover:shadow-xl
          "
        >
          Check Answer ✨
        </button>
      )}

      {/* Wrong Answer */}

      {checked && !correct && (
        <div
          className="
            mt-6
            text-center
          "
        >
          <p
            className="
              font-semibold
              text-[#b57767]
            "
          >
            Not quite! Keep rearranging
            the letters.
          </p>

          <button
            type="button"
            onClick={handleShuffleAgain}
            className="
              mt-3
              text-sm
              font-medium
              text-[#8b6f47]
              underline
              underline-offset-4
            "
          >
            Shuffle Again
          </button>
        </div>
      )}

      {/* Correct Answer */}

      {correct && (
        <div
          className="
            mt-8
            w-full
            max-w-xl
            rounded-3xl
            border
            border-[#d8e5d2]
            bg-[#f1f7ee]
            p-8
            text-center
            shadow-lg
          "
        >
          <div className="text-5xl">
            🎉
          </div>

          <h3
            className="
              mt-4
              text-2xl
              font-semibold
              text-[#4b3f34]
            "
          >
            You got it!
          </h3>

          <p
            className="
              mt-2
              text-lg
              font-medium
              text-[#7d8e74]
            "
          >
            {title}
          </p>

          <button
            type="button"
            onClick={onComplete}
            className="
              mt-7
              rounded-2xl
              bg-[#d69a8c]
              px-12
              py-4
              text-lg
              font-semibold
              text-white
              shadow-lg
              transition
              duration-300
              hover:-translate-y-1
              hover:bg-[#c78879]
              hover:shadow-xl
            "
          >
            Complete ✨
          </button>
        </div>
      )}

    </div>
  );
}