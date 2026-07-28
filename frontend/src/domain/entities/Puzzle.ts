export interface PuzzlePiece {
  id: number;
  correctIndex: number;
  currentIndex: number;
}

export interface PuzzleState {
  pieces: PuzzlePiece[];
  size: number;
}