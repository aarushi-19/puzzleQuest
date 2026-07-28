import PuzzleGrid from "./PuzzleGrid";

const DEMO_IMAGE =
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800";

export default function JigsawBoard() {
  return (
    <main className="min-h-screen bg-[#FCF8F2] px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-3 text-center text-5xl font-bold text-[#4B3F34]">
          Solve the Puzzle
        </h1>

        <p className="mb-10 text-center text-lg text-[#6B5F52]">
          Complete the puzzle to unlock your next memory.
        </p>

        <PuzzleGrid imageUrl={DEMO_IMAGE} />
      </div>
    </main>
  );
}