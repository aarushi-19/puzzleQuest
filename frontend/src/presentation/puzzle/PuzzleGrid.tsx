import type { ImagePiece } from "./utils/splitImage";
import PuzzlePiece from "./PuzzlePiece";

type PuzzleGridProps = {
  pieces: ImagePiece[];
  size: number;
};

export default function PuzzleGrid({
  pieces,
  size,
}: PuzzleGridProps) {
  return (
    <div
      className="
        mx-auto
        grid
        w-fit
        gap-3
        rounded-[28px]
        bg-[#f8f4ef]
        p-5
        shadow-xl
        md:gap-4
        md:p-6
      "
      style={{
        gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
      }}
    >
      {pieces.map((piece) => (
        <PuzzlePiece
          key={piece.id}
          piece={piece}
        />
      ))}
    </div>
  );
}