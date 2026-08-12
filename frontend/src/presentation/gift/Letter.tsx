import { motion } from "framer-motion";

type LetterProps = {
  recipient?: string;
  occasion?: string;
  onContinue: () => void;
};

export default function Letter({
  recipient = "Friend",
  occasion = "Special Day",
  onContinue,
}: LetterProps) {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="
            rounded-3xl
            border
            border-[#e6ddd1]
            bg-[#fdf8ef]
            p-8
            shadow-lg
            md:p-12
          "
        >
          {/* Letter heading */}

          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#b9966d]">
            A Letter For You
          </p>

          <h1
            className="mt-6 text-4xl font-semibold text-[#4b3f34] md:text-5xl"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Dear {recipient},
          </h1>

          {/* Occasion */}

          <p className="mt-3 text-lg text-[#9a8069]">
            {occasion}
          </p>

          {/* Letter */}

          <div className="mt-10 space-y-5 text-lg leading-8 text-[#5c5148]">
            <p>
              I wanted to give you something a little different.
            </p>

            <p>
              I've hidden some special memories behind fun little
              puzzles.
            </p>

            <p>
              Take your time, enjoy every surprise, and I hope this
              journey makes you smile.
            </p>
          </div>

          {/* Signature */}

          <div className="mt-10">
            <p className="text-[#5c5148]">
              With love,
            </p>

            <p className="mt-2 text-xl font-semibold text-[#4b3f34]">
              ❤️
            </p>
          </div>

          {/* Continue */}

          <button
            type="button"
            onClick={onContinue}
            className="
              mt-10
              w-full
              rounded-full
              bg-[#d69a8c]
              py-4
              text-lg
              font-semibold
              text-white
              transition
              hover:bg-[#c78879]
            "
          >
            Begin Journey →
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
}