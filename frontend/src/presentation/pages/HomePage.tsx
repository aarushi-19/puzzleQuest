import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import MemoryJourney from "../components/MemoryJourney";
import GiftPreview from "../components/GiftPreview";

export default function HomePage() {
  return (
    <main className="min-h-screen">
    <Navbar />

      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <p className="mb-3 rounded-full border border-[#d6cdbf] bg-white/60 px-5 py-2 text-sm font-medium tracking-wide text-[#8b6f47] shadow-sm backdrop-blur-sm">
          ✨ Create unforgettable memories
        </p>

        <h1 className="text-7xl font-extrabold text-[#4b3f34]">
          PuzzleQuest
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-9 text-[#6d6257]">
          Transform your favourite memories into beautiful interactive puzzle
          journeys that reveal photographs, stories and heartfelt messages one
          piece at a time.
        </p>

        <Link to="/create">
          <button className="mt-10 rounded-2xl bg-[#d69a8c] px-10 py-4 text-lg font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#cb8c7d] hover:shadow-xl">
            Create Your Gift →
          </button>
        </Link>

      </section>

      {/* Features */}

      <section className="mx-auto max-w-6xl px-8 pb-24">

        <h2 className="mb-12 text-center text-4xl font-bold text-[#4b3f34]">
          Why PuzzleQuest?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-white/80 p-8 shadow-lg backdrop-blur-md">
            <div className="mb-4 text-5xl">📸</div>

            <h3 className="mb-3 text-2xl font-semibold text-[#4b3f34]">
              Add Memories
            </h3>

            <p className="text-[#6d6257] leading-7">
              Upload your favourite photos and write heartfelt stories that will
              become unforgettable puzzle moments.
            </p>
          </div>

          <div className="rounded-3xl bg-white/80 p-8 shadow-lg backdrop-blur-md">
            <div className="mb-4 text-5xl">🧩</div>

            <h3 className="mb-3 text-2xl font-semibold text-[#4b3f34]">
              Choose Puzzle Types
            </h3>

            <p className="text-[#6d6257] leading-7">
              Pick from jigsaw puzzles, sliding puzzles, word searches,
              crosswords and more.
            </p>
          </div>

          <div className="rounded-3xl bg-white/80 p-8 shadow-lg backdrop-blur-md">
            <div className="mb-4 text-5xl">🎁</div>

            <h3 className="mb-3 text-2xl font-semibold text-[#4b3f34]">
              Gift the Experience
            </h3>

            <p className="text-[#6d6257] leading-7">
              Share a beautiful personalised journey your loved one can solve
              and remember forever.
            </p>
          </div>

        </div>

      </section>

      <MemoryJourney />

      <GiftPreview />

    </main>
  );
}