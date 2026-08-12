export interface PuzzlePiece {
  id: number;

  /** The correct location of this piece */
  correctIndex: number;

  /** The current location on the board */
  currentIndex: number;

  /** The cropped image for this piece */
  image: string;
}

export interface PuzzleState {
  pieces: PuzzlePiece[];
  size: number;
}