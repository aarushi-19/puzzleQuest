import { useState } from "react";
import GiftBox from "../gift/GiftBox";

export default function GiftViewerPage() {
  const [opened, setOpened] = useState(false);

  if (!opened) {
    return <GiftBox onOpen={() => setOpened(true)} />;
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-6xl font-bold">
        Envelope coming next...
      </h1>
    </main>
  );
}