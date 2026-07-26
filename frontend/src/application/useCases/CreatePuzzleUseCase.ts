import { Puzzle } from "../../domain/entities/Puzzle";

export class CreatePuzzleUseCase {
    execute(memoryId: string): Puzzle {
        return new Puzzle(
            crypto.randomUUID(),
            memoryId,
            3,
            3,
            false
        );
    }
}