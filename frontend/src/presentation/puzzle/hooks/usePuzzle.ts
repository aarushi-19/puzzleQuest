import { useMemo, useState } from "react";
import type { PuzzlePiece } from "../../../domain/entities/Puzzle";

export function usePuzzle(size = 3) {
  const totalPieces = size * size;

  const createPieces = (): PuzzlePiece[] => {
    const pieces: PuzzlePiece[] = [];

    for (let i = 0; i < totalPieces; i++) {
      pieces.push({
        id: i,
        currentIndex: i,
        correctIndex: i,
      });
    }

    const shuffled = [...pieces].sort(() => Math.random() - 0.5);

    return shuffled.map((piece, index) => ({
      ...piece,
      currentIndex: index,
    }));
  };

  const [pieces, setPieces] = useState<PuzzlePiece[]>(createPieces);

  const isComplete = useMemo(() => {
    return pieces.every(
      (piece) => piece.currentIndex === piece.correctIndex
    );
  }, [pieces]);

  const swapPieces = (
    firstIndex: number,
    secondIndex: number
  ) => {
    const updated = [...pieces];

    [updated[firstIndex], updated[secondIndex]] = [
      updated[secondIndex],
      updated[firstIndex],
    ];

    // Keep currentIndex in sync with each piece's position
    const normalized = updated.map((piece, index) => ({
      ...piece,
      currentIndex: index,
    }));

    setPieces(normalized);
  };

  return {
    pieces,
    swapPieces,
    isComplete,
    size,
  };
}