import { Memory } from "../../domain/entities/Memory";

export class UnlockMemoryUseCase {
    execute(memory: Memory): Memory {
        return memory.unlock();
    }
}