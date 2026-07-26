import { Gift } from "../../domain/entities/Gift";

export class CreateGiftUseCase {
    execute(recipient: string, occasion: string): Gift {
        return new Gift(
            crypto.randomUUID(),
            recipient,
            occasion,
            []
        );
    }
}