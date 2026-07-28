export type PuzzleType = "jigsaw" | "word-scramble";

export type MemoryStatus =
  | "locked"
  | "available"
  | "completed";

export interface Memory {
  id: string;
  title: string;
  story: string;
  image: File | null;
  puzzle: PuzzleType;
  status: MemoryStatus;
}

export interface Gift {
    id: string;
    recipient: string;
    occasion: string;
    journeyTitle: string;
    memories: Memory[];
}