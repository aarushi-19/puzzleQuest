export class Message {
    constructor(
        public readonly id: string,
        public readonly text: string,
        public readonly memoryId: string
    ) {}
}