export class Puzzle {
    constructor(
        public readonly id: string,
        public readonly memoryId: string,
        public readonly rows: number,
        public readonly columns: number,
        public readonly completed: boolean = false
    ) {}

    complete(): Puzzle {
        return new Puzzle(
            this.id,
            this.memoryId,
            this.rows,
            this.columns,
            true
        );
    }
}