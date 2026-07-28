import type { PuzzleState, PuzzlePiece } from "../../domain/entities/Puzzle";

export class CreatePuzzleUseCase {
  execute(size = 3): PuzzleState {
    const totalPieces = size * size;

    const pieces: PuzzlePiece[] = [];

    for (let i = 0; i < totalPieces; i++) {
      pieces.push({
        id: i,
        correctIndex: i,
        currentIndex: i,
      });
    }

    const shuffled = pieces
      .sort(() => Math.random() - 0.5)
      .map((piece, index) => ({
        ...piece,
        currentIndex: index,
      }));

    return {
      pieces: shuffled,
      size,
    };
  }
}