import { useState } from "react";
import GiftBox from "./GiftBox";
import Envelope from "./Envelope";
import Letter from "./Letter";
import Journey from "../journey/Journey";
import { useGift } from "../../context/GiftContext";

type OpeningStage =
  | "gift"
  | "envelope"
  | "letter"
  | "journey";

export default function OpeningExperience() {
  const { gift } = useGift();

  const [stage, setStage] = useState<OpeningStage>("gift");

  switch (stage) {
    case "gift":
      return (
        <GiftBox
          onOpen={() => setStage("envelope")}
        />
      );

    case "envelope":
      return (
        <Envelope
          onOpen={() => setStage("letter")}
        />
      );

    case "letter":
      return (
        <Letter
          recipient={gift.recipient}
          occasion={gift.occasion}
          onContinue={() => setStage("journey")}
        />
      );

    case "journey":
      return <Journey />;

    default:
      return null;
  }
}