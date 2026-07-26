type Props = {
  title: string;
  story: string;
  puzzle: string;
  image?: string;
};

const puzzleNames: Record<string, string> = {
  jigsaw: "🧩 Jigsaw Puzzle",
  quiz: "❓ Quiz",
  scramble: "🔤 Word Scramble",
  match: "🃏 Memory Match",
};

export default function PreviewMemoryCard({
  title,
  story,
  puzzle,
  image,
}: Props) {
  return (
    <div className="overflow-hidden rounded-[30px] border border-[#e6ddd1] bg-[#fcfaf7] shadow-lg">

      {/* Image */}

      {image ? (
        <img
          src={image}
          alt={title}
          className="h-80 w-full object-cover"
        />
      ) : (
        <div className="flex h-80 items-center justify-center bg-[#efe8dc] text-7xl">
          📷
        </div>
      )}

      {/* Content */}

      <div className="p-8">

        <span className="rounded-full bg-[#f5ebe8] px-4 py-2 text-sm font-semibold text-[#b57767]">
          {puzzleNames[puzzle]}
        </span>

        <h2 className="mt-6 text-3xl font-bold text-[#4b3f34]">
          {title || "Untitled Memory"}
        </h2>

        <p className="mt-5 whitespace-pre-line text-lg leading-8 text-[#6b5f52]">
          {story || "No story written yet."}
        </p>

      </div>
    </div>
  );
}