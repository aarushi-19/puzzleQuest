import type { PuzzlePiece as PuzzlePieceType } from "../../domain/entities/Puzzle";

type PuzzlePieceProps = {
  imageUrl: string;
  piece: PuzzlePieceType;
  size: number;
};

export default function PuzzlePiece({
  imageUrl,
  piece,
  size,
}: PuzzlePieceProps) {
  const row = Math.floor(piece.correctIndex / size);
  const col = piece.correctIndex % size;

  const percentage = size * 100;

  return (
    <div className="aspect-square overflow-hidden rounded-xl border border-[#D9D0C5] shadow">
      <div
        className="h-full w-full bg-cover"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: `${percentage}% ${percentage}%`,
          backgroundPosition: `${(col * 100) / (size - 1)}% ${
            (row * 100) / (size - 1)
          }%`,
        }}
      />
    </div>
  );
}