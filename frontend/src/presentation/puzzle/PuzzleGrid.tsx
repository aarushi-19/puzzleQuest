import PuzzlePiece from "./PuzzlePiece";
import { usePuzzle } from "./hooks/usePuzzle";

type PuzzleGridProps = {
  imageUrl: string;
  size?: number;
};

export default function PuzzleGrid({
  imageUrl,
  size = 3,
}: PuzzleGridProps) {
  const { pieces } = usePuzzle(size);

  return (
    <div
      className="mx-auto grid max-w-lg gap-2"
      style={{
        gridTemplateColumns: `repeat(${size}, 1fr)`,
      }}
    >
      {pieces.map((piece) => (
        <div
          key={piece.id}
          style={{
            gridRow: Math.floor(piece.currentIndex / size) + 1,
            gridColumn: (piece.currentIndex % size) + 1,
          }}
        >
          <PuzzlePiece
            piece={piece}
            imageUrl={imageUrl}
            size={size}
          />
        </div>
      ))}
    </div>
  );
}