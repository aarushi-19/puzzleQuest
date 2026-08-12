export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6F8F72] text-xl text-white">
        🧩
      </div>

      <div>
        <h1
          className="text-2xl font-semibold"
          style={{
            fontFamily: "Playfair Display",
          }}
        >
          PuzzleQuest
        </h1>

        <p className="text-sm text-gray-500">
          Every memory deserves a journey
        </p>
      </div>
    </div>
  );
}