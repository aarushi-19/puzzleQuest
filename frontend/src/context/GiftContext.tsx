import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Gift } from "../domain/entities/Gift";

type GiftContextType = {
  gift: Gift;
  setGift: React.Dispatch<React.SetStateAction<Gift>>;
};

const GiftContext = createContext<GiftContextType | undefined>(undefined);

interface GiftProviderProps {
  children: ReactNode;
}

export function GiftProvider({
  children,
}: GiftProviderProps) {
  const [gift, setGift] = useState<Gift>({
    id: crypto.randomUUID(),

    giftTitle: "",

    recipientName: "",

    occasion: "Birthday",

    coverImage: null,

    memories: [],

    createdAt: new Date(),
  });

  return (
    <GiftContext.Provider
      value={{
        gift,
        setGift,
      }}
    >
      {children}
    </GiftContext.Provider>
  );
}

export function useGift() {
  const context = useContext(GiftContext);

  if (!context) {
    throw new Error(
      "useGift must be used within a GiftProvider"
    );
  }

  return context;
}