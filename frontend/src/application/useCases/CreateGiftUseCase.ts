import type { Gift } from "../../domain/entities/Gift";

export class CreateGiftUseCase {
  execute(recipient: string, occasion: string): Gift {
    return {
      id: crypto.randomUUID(),
      recipient,
      occasion,
      journeyTitle: "",
      memories: [],
    };
  }
}