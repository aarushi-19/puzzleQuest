import { Memory } from "./Memory";

export class Gift {
    constructor(
        public readonly id: string,
        public readonly recipient: string,
        public readonly occasion: string,
        public readonly memories: Memory[]
    ) {}

    addMemory(memory: Memory): Gift {
        return new Gift(
            this.id,
            this.recipient,
            this.occasion,
            [...this.memories, memory]
        );
    }
}