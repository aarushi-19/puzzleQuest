import { useGift } from "../../context/GiftContext";

export default function GiftViewerPage() {
  const { gift } = useGift();

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-5xl">

        {/* Header */}

        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#b9966d]">
            A SPECIAL GIFT FOR
          </p>

          <h1 className="mt-4 text-7xl font-bold text-[#4b3f34]">
            {gift.recipient}
          </h1>

          <p className="mt-3 text-2xl text-[#75695d]">
            {gift.occasion}
          </p>

          <h2 className="mt-10 text-5xl font-bold text-[#4b3f34]">
            {gift.journeyTitle}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-[#6d6257]">
            Every memory has been hidden behind a puzzle.
            Solve them one by one and relive every special moment.
          </p>
        </div>

        {/* Memories */}

        <div className="mt-20 space-y-8">

          {gift.memories.map((memory, index) => (

            <div
              key={index}
              className="flex flex-col items-center justify-between gap-8 rounded-[32px] bg-white/90 p-10 shadow-xl md:flex-row"
            >

              <div>

                <p className="text-sm uppercase tracking-[0.3em] text-[#b9966d]">
                  Memory {index + 1}
                </p>

                <h3 className="mt-3 text-4xl font-bold text-[#4b3f34]">
                  {memory.title}
                </h3>

                <p className="mt-4 text-lg text-[#75695d]">
                  🔒 Locked until puzzle is solved
                </p>

              </div>

              <button
                className="
                  rounded-2xl
                  bg-[#d69a8c]
                  px-10
                  py-4
                  text-lg
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#c78879]
                  hover:shadow-xl
                "
              >
                Begin Puzzle →
              </button>

            </div>

          ))}

        </div>

      </div>
    </main>
  );
}