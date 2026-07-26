import { useState } from "react";
import GiftBox from "../gift/GiftBox";
import Envelope from "../gift/Envelope";

export default function GiftViewerPage() {
  const [stage, setStage] = useState(0);

  if (stage === 0) {
    return (
      <GiftBox
        onOpen={() => setStage(1)}
      />
    );
  }

  if (stage === 1) {
    return (
      <Envelope
        onOpen={() => setStage(2)}
      />
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-6xl font-bold text-[#4b3f34]">
        Letter coming next...
      </h1>
    </main>
  );
}