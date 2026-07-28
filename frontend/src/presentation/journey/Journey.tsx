import { useNavigate } from "react-router-dom";
import { useGift } from "../../context/GiftContext";

import JourneyHeader from "./JourneyHeader";
import JourneyCard from "./JourneyCard";
import JourneyProgress from "./JourneyProgress";

export default function Journey() {
  const navigate = useNavigate();
  const { gift } = useGift();

  const completed = gift.memories.filter(
    (memory) => memory.status === "completed"
  ).length;

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <JourneyHeader
        recipient={gift.recipient}
        occasion={gift.occasion}
        title={gift.journeyTitle}
      />

      <div className="space-y-8">
        {gift.memories.map((memory, index) => (
          <JourneyCard
            key={memory.id}
            memory={memory}
            index={index}
            onStart={() =>
              navigate(`/puzzle/${memory.id}`)
            }
            onView={() =>
              navigate(`/memory/${memory.id}`)
            }
          />
        ))}
      </div>

      <JourneyProgress
        total={gift.memories.length}
        completed={completed}
      />
    </main>
  );
}