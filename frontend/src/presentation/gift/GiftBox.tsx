import { motion } from "framer-motion";

type GiftBoxProps = {
  onOpen: () => void;
};

export default function GiftBox({ onOpen }: GiftBoxProps) {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex max-w-2xl flex-col items-center text-center"
      >
        {/* Gift */}

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-8xl"
        >
          🎁
        </motion.div>

        {/* Label */}

        <p className="mt-8 text-sm font-medium uppercase tracking-[0.3em] text-[#b9966d]">
          A Special Gift
        </p>

        {/* Heading */}

        <h1
          className="mt-5 text-4xl font-semibold leading-tight text-[#4b3f34] md:text-6xl"
          style={{
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Someone created
          <br />
          something just for you.
        </h1>

        {/* Description */}

        <p className="mt-6 max-w-xl text-lg leading-8 text-[#6d6257]">
          Inside are memories, surprises and little puzzles waiting to be
          discovered.
        </p>

        {/* Button */}

        <motion.button
          type="button"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          onClick={onOpen}
          className="
            mt-10
            rounded-full
            bg-[#d69a8c]
            px-10
            py-4
            text-lg
            font-semibold
            text-white
            shadow-md
            transition
            hover:bg-[#c78879]
          "
        >
          Open Gift ✨
        </motion.button>
      </motion.div>
    </main>
  );
}