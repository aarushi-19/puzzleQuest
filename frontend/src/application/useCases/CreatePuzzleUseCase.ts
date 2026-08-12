import type {
  PuzzlePiece,
  PuzzleState,
} from "../../domain/entities/Puzzle";

export class CreatePuzzleUseCase {
  execute(size = 3): PuzzleState {
    const totalPieces = size * size;

    const pieces: PuzzlePiece[] = [];

    for (let i = 0; i < totalPieces; i++) {
      pieces.push({
        id: i,
        correctIndex: i,
        currentIndex: i,
        image: "",
      });
    }

    return {
      pieces,
      size,
    };
  }
}