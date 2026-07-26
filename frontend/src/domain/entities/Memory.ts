export class Memory {
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly description: string,
        public readonly order: number,
        public readonly unlocked: boolean = false
    ) {}

    unlock(): Memory {
        return new Memory(
            this.id,
            this.title,
            this.description,
            this.order,
            true
        );
    }
}