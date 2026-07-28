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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-screen items-center justify-center px-6"
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl rounded-3xl bg-[#fdf8ef] p-10 shadow-2xl"
      >
        <p className="mb-8 text-lg italic text-[#6d6257]">
          Dear {recipient},
        </p>

        <h1 className="mb-6 text-4xl font-bold text-[#4b3f34]">
          Happy {occasion}! ❤️
        </h1>

        <p className="mb-4 leading-8 text-[#5c5148]">
          I wanted to give you something a little different.
        </p>

        <p className="mb-4 leading-8 text-[#5c5148]">
          I've hidden some special memories behind fun little puzzles.
        </p>

        <p className="mb-10 leading-8 text-[#5c5148]">
          Take your time, enjoy every surprise, and I hope this journey
          makes you smile.
        </p>

        <div className="text-right">
          <p className="text-[#5c5148]">With love,</p>
          <p className="mt-2 text-xl font-semibold text-[#4b3f34]">
            ❤️ Aarushi
          </p>
        </div>

        <button
          onClick={onContinue}
          className="mt-12 w-full rounded-2xl bg-[#d69a8c] py-4 text-lg font-semibold text-white transition hover:opacity-90"
        >
          Begin Journey →
        </button>
      </motion.div>
    </motion.div>
  );
}