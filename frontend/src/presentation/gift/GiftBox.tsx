import { motion } from "framer-motion";

type GiftBoxProps = {
  onOpen: () => void;
};

export default function GiftBox({ onOpen }: GiftBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="flex min-h-[80vh] flex-col items-center justify-center"
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-9xl"
      >
        🎁
      </motion.div>

      <p className="mt-10 text-sm uppercase tracking-[0.35em] text-[#b9966d]">
        A Special Gift
      </p>

      <h1 className="mt-5 text-center text-6xl font-bold text-[#4b3f34]">
        Someone created
        <br />
        something just for you.
      </h1>

      <p className="mt-8 max-w-xl text-center text-xl leading-9 text-[#6d6257]">
        Inside are memories, surprises and little puzzles waiting to be
        discovered.
      </p>

      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={onOpen}
        className="mt-14 rounded-2xl bg-[#d69a8c] px-12 py-5 text-xl font-semibold text-white shadow-xl transition"
      >
        Open Gift ✨
      </motion.button>
    </motion.div>
  );
}