import type { Gift } from "../../domain/entities/Gift";

export class CreateGiftUseCase {
  execute(
    giftTitle: string,
    recipientName: string,
    occasion: string
  ): Gift {
    return {
      id: crypto.randomUUID(),

      giftTitle,

      recipientName,

      occasion,

      coverImage: null,

      memories: [],

      createdAt: new Date(),
    };
  }
}