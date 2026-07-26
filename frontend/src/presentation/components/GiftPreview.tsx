export default function GiftPreview() {
  return (
    <section className="py-28 px-6">

      <div className="mx-auto max-w-6xl">

        <div className="text-center">

          <p className="text-sm font-semibold uppercase tracking-[6px] text-[#8B6F47]">
            EXPERIENCE THE MAGIC
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#4B3F34]">
            Watch Your Gift
            <br />
            Come to Life
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6D6257]">
            Every puzzle solved reveals another photo, another story and another
            unforgettable moment.
          </p>

        </div>

        <div className="mt-20 flex flex-col items-center">

          {/* Photo */}

          <div className="rounded-[32px] bg-white/80 p-8 shadow-xl backdrop-blur">

            <div className="flex h-80 w-80 items-center justify-center rounded-3xl border-2 border-dashed border-[#DDD3C5] bg-[#FFFDF8]">

              <div className="text-center">

                <div className="text-7xl">📷</div>

                <p className="mt-5 text-[#6D6257]">
                  Your Photo Appears Here
                </p>

              </div>

            </div>

          </div>

          {/* Arrow */}

          <div className="my-8 text-5xl text-[#B49367]">
            ↓
          </div>

          {/* Puzzle */}

          <div className="rounded-full bg-[#D69A8C] px-10 py-4 text-lg font-semibold text-white shadow-lg">
            🧩 Solve Puzzle
          </div>

          {/* Arrow */}

          <div className="my-8 text-5xl text-[#B49367]">
            ↓
          </div>

          {/* Letter */}

          <div className="rounded-3xl bg-white/80 px-10 py-8 shadow-xl">

            <div className="text-5xl">
              💌
            </div>

            <h3 className="mt-4 text-2xl font-semibold text-[#4B3F34]">
              Secret Message
            </h3>

            <p className="mt-3 max-w-md text-[#6D6257]">
              "Thank you for every memory we've created together."
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}