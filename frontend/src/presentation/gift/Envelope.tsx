import { motion } from "framer-motion";

type EnvelopeProps = {
  onOpen: () => void;
};

export default function Envelope({ onOpen }: EnvelopeProps) {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        {/* Envelope */}

        <motion.button
          type="button"
          onClick={onOpen}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          className="
            relative
            h-64
            w-80
            cursor-pointer
            overflow-hidden
            rounded-xl
            border
            border-[#d8c5ae]
            bg-[#f3e5d3]
            shadow-lg
          "
          aria-label="Open envelope"
        >
          {/* Letter */}

          <div className="absolute left-6 right-6 top-8 h-44 rounded-lg bg-white shadow-sm">
            <div className="px-5 pt-8 text-left">
              <div className="h-2 w-20 rounded-full bg-[#e8ddd1]" />
              <div className="mt-3 h-2 w-32 rounded-full bg-[#eee7df]" />
            </div>
          </div>

          {/* Envelope flap */}

          <div
            className="
              absolute
              inset-x-0
              top-0
              z-20
              h-36
              bg-[#ead9c6]
            "
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            }}
          />

          {/* Envelope front */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              z-30
              h-36
              bg-[#f0dfcb]
            "
            style={{
              clipPath: "polygon(0 100%, 50% 35%, 100% 100%)",
            }}
          />

          {/* Heart */}

          <div className="absolute inset-0 z-40 flex items-center justify-center pt-4 text-5xl">
            💌
          </div>
        </motion.button>

        {/* Instruction */}

        <p className="mt-8 text-lg text-[#6d6257]">
          Click the envelope to open your letter
        </p>
      </motion.div>
    </main>
  );
}