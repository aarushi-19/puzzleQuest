import { Memory } from "../../domain/entities/Memory";


export class CreateMemoryUseCase {
    execute(
        title: string,
        description: string,
        order: number
    ): Memory {
        return new Memory(
            crypto.randomUUID(),
            title,
            description,
            order,
            false
        );
    }
}