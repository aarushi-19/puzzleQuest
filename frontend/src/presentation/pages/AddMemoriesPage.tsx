import { useNavigate } from "react-router-dom";
import { useGift } from "../../context/GiftContext";
import MemoryCard from "../components/MemoryCard";
import ProgressStepper from "../components/ProgressStepper";
import type { Memory } from "../../domain/entities/Gift";

export default function AddMemoriesPage() {
  const navigate = useNavigate();
  const { gift, setGift } = useGift();

  const memories: Memory[] =
    gift.memories.length > 0
      ? gift.memories
      : [
          {
            id: crypto.randomUUID(),
            title: "",
            story: "",
            image: null,
            puzzle: "jigsaw",
            status: "available",
          },
        ];

  const handleMemoryChange = (
    index: number,
    field: "title" | "story",
    value: string
  ) => {
    const updated = [...memories];

    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    setGift({
      ...gift,
      memories: updated,
    });
  };

  const handleImageChange = (
    index: number,
    file: File | null
  ) => {
    const updated = [...memories];

    updated[index] = {
      ...updated[index],
      image: file,
    };

    setGift({
      ...gift,
      memories: updated,
    });
  };

  const addMemory = () => {
    const newMemory: Memory = {
      id: crypto.randomUUID(),
      title: "",
      story: "",
      image: null,
      puzzle: "jigsaw",
      status: memories.length === 0 ? "available" : "locked",
    };

    setGift({
      ...gift,
      memories: [...memories, newMemory],
    });
  };

  const handleContinue = () => {
    navigate("/puzzle");
  };

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <ProgressStepper currentStep={2} />

        <div className="mt-10 rounded-[32px] border border-[#e6ddd1] bg-white/80 p-8 shadow-xl backdrop-blur-md md:p-10">

          {/* Step */}

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9f8b73]">
            Step 2 of 4
          </p>

          {/* Heading */}

          <h1 className="mt-3 text-4xl font-semibold text-[#4b3f34] md:text-5xl">
            Add Your Memories
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#6d6257]">
            Add the moments that make this gift unforgettable. Each memory
            becomes a puzzle your loved one unlocks during their journey.
          </p>

          {/* Memories */}

          <div className="mt-10 space-y-8">
            {memories.map((memory, index) => (
              <MemoryCard
                key={memory.id}
                index={index}
                memory={memory}
                onTitleChange={(value) =>
                  handleMemoryChange(
                    index,
                    "title",
                    value
                  )
                }
                onStoryChange={(value) =>
                  handleMemoryChange(
                    index,
                    "story",
                    value
                  )
                }
                onImageChange={(file) =>
                  handleImageChange(
                    index,
                    file
                  )
                }
              />
            ))}

            {/* Add Memory */}

            <button
              type="button"
              onClick={addMemory}
              className="
                w-full
                rounded-2xl
                border-2
                border-dashed
                border-[#d7cab9]
                bg-[#faf6ef]
                py-4
                text-lg
                font-semibold
                text-[#8b6f47]
                transition
                duration-200
                hover:border-[#d69a8c]
                hover:bg-[#fffaf3]
              "
            >
              + Add Another Memory
            </button>

            {/* Continue */}

            <button
              type="button"
              onClick={handleContinue}
              className="
                w-full
                rounded-2xl
                bg-[#d69a8c]
                py-4
                text-lg
                font-semibold
                text-white
                shadow-md
                transition
                duration-200
                hover:bg-[#cb8c7d]
              "
            >
              Continue →
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}