import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Gift } from "../domain/entities/Gift";

type GiftContextType = {
  gift: Gift;
  setGift: React.Dispatch<React.SetStateAction<Gift>>;
};

const GiftContext = createContext<GiftContextType | undefined>(undefined);

export function GiftProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [gift, setGift] = useState<Gift>({
    id: crypto.randomUUID(),
    recipient: "",
    occasion: "Birthday",
    journeyTitle: "",
    memories: [],
  });

  return (
    <GiftContext.Provider value={{ gift, setGift }}>
      {children}
    </GiftContext.Provider>
  );
}

export function useGift() {
  const context = useContext(GiftContext);

  if (!context) {
    throw new Error("useGift must be used inside GiftProvider");
  }

  return context;
}