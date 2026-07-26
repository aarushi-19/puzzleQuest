import { motion } from "framer-motion";

type EnvelopeProps = {
  onOpen: () => void;
};

export default function Envelope({ onOpen }: EnvelopeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex min-h-[80vh] flex-col items-center justify-center"
    >
      <motion.div
        whileHover={{
          scale: 1.03,
          rotate: -2,
        }}
        transition={{
          duration: 0.2,
        }}
        onClick={onOpen}
        className="cursor-pointer"
      >
        <div className="relative h-64 w-[420px] rounded-b-xl bg-[#f7efe4] shadow-2xl">

          {/* Envelope flap */}

          <motion.div
            whileHover={{
              rotateX: 180,
            }}
            transition={{
              duration: 0.6,
            }}
            className="absolute left-0 top-0 h-32 w-full origin-top bg-[#ead9c6]"
            style={{
              clipPath: "polygon(0 0,100% 0,50% 100%)",
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center text-6xl">
            💌
          </div>

        </div>
      </motion.div>

      <p className="mt-10 text-lg text-[#6d6257]">
        Click the envelope to open your letter
      </p>
    </motion.div>
  );
}