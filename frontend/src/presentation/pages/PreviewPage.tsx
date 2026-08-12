import { useNavigate } from "react-router-dom";
import { useGift } from "../../context/GiftContext";

import ProgressStepper from "../components/ProgressStepper";
import PreviewMemoryCard from "../components/PreviewMemoryCard";

export default function PreviewPage() {
  const navigate = useNavigate();
  const { gift } = useGift();

  const handleGenerateGift = () => {
    navigate("/gift");
  };

  const handleEditGift = () => {
    navigate("/create");
  };

  const coverImageUrl = gift.coverImage
    ? URL.createObjectURL(gift.coverImage)
    : undefined;

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <ProgressStepper currentStep={4} />

        {/* Header */}

        <div className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9f8b73]">
            Step 4 of 4
          </p>

          <h1 className="mt-3 text-4xl font-semibold text-[#4b3f34] md:text-5xl">
            Preview Your Gift
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#6b5f52]">
            Take a final look at your gift before you generate the
            PuzzleQuest experience.
          </p>
        </div>

        {/* Gift Details */}

        <section className="mt-10 overflow-hidden rounded-3xl border border-[#e6ddd1] bg-white/85 shadow-sm">

          {/* Cover */}

          {coverImageUrl && (
            <img
              src={coverImageUrl}
              alt={gift.giftTitle || "Gift cover"}
              className="h-72 w-full object-cover md:h-96"
            />
          )}

          <div className="p-8 md:p-10">

            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#9f8b73]">
              {gift.occasion}
            </p>

            <h2
              className="mt-3 text-4xl font-semibold text-[#4b3f34]"
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {gift.giftTitle || "Your PuzzleQuest Gift"}
            </h2>

            <p className="mt-3 text-lg text-[#6d6257]">
              A special gift for{" "}
              <span className="font-semibold text-[#4b3f34]">
                {gift.recipientName || "your recipient"}
              </span>
            </p>

          </div>
        </section>

        {/* Memories */}

        <section className="mt-10">

          <h2 className="text-2xl font-semibold text-[#4b3f34]">
            Your Memories
          </h2>

          <p className="mt-2 text-[#6d6257]">
            {gift.memories.length}{" "}
            {gift.memories.length === 1 ? "memory" : "memories"} added
          </p>

          <div className="mt-6 space-y-8">
            {gift.memories.map((memory) => (
              <PreviewMemoryCard
                key={memory.id}
                title={memory.title}
                story={memory.story}
                puzzle={memory.puzzle}
                image={
                  memory.image
                    ? URL.createObjectURL(memory.image)
                    : undefined
                }
              />
            ))}
          </div>

        </section>

        {/* Actions */}

        <div className="mt-12 flex flex-col gap-4 md:flex-row">

          <button
            type="button"
            onClick={handleEditGift}
            className="
              flex-1
              rounded-2xl
              border
              border-[#d69a8c]
              bg-white
              py-4
              font-semibold
              text-[#b57767]
              transition
              hover:bg-[#f7ebe7]
            "
          >
            ← Edit Gift
          </button>

          <button
            type="button"
            onClick={handleGenerateGift}
            className="
              flex-1
              rounded-2xl
              bg-[#d69a8c]
              py-4
              font-semibold
              text-white
              transition
              hover:bg-[#c78879]
            "
          >
            Generate Gift 🎁
          </button>

        </div>

      </div>
    </main>
  );
}