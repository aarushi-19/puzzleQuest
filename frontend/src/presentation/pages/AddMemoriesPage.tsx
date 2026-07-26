import { useNavigate } from "react-router-dom";
import { useGift } from "../../context/GiftContext";
import MemoryCard from "../components/MemoryCard";
import ProgressStepper from "../components/ProgressStepper";

export default function AddMemoriesPage() {
  const navigate = useNavigate();
  const { gift, setGift } = useGift();

  const memories =
    gift.memories.length > 0
      ? gift.memories
      : [
          {
            title: "",
            story: "",
            image: null,
            puzzle: "",
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
    setGift({
      ...gift,
      memories: [
        ...memories,
        {
          title: "",
          story: "",
          image: null,
          puzzle: "",
        },
      ],
    });
  };

  const handleContinue = () => {
    navigate("/puzzle"); // Change this if your route is different
  };

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <ProgressStepper currentStep={2} />

        <div className="mt-10 rounded-[36px] border border-[#e6ddd1] bg-white/75 p-10 shadow-2xl backdrop-blur-md">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9f8b73]">
            Step 2 of 4
          </p>

          <h1 className="mt-3 text-5xl font-bold text-[#4b3f34]">
            Add Your Memories
          </h1>

          <p className="mt-4 text-lg leading-8 text-[#6d6257]">
            Add the moments that make this gift unforgettable. Each memory will
            become a puzzle your loved one unlocks during their journey.
          </p>

          <div className="mt-12 space-y-8">
            {memories.map((memory, index) => (
              <MemoryCard
                key={index}
                index={index}
                memory={memory}
                onTitleChange={(value) =>
                  handleMemoryChange(index, "title", value)
                }
                onStoryChange={(value) =>
                  handleMemoryChange(index, "story", value)
                }
                onImageChange={(file) =>
                  handleImageChange(index, file)
                }
              />
            ))}

            <button
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
                duration-300
                hover:border-[#d69a8c]
                hover:bg-[#fffaf3]
                hover:shadow-lg
              "
            >
              + Add Another Memory
            </button>

            <button
              onClick={handleContinue}
              className="
                w-full
                rounded-2xl
                bg-[#d69a8c]
                py-4
                text-lg
                font-semibold
                text-white
                shadow-lg
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-[#cb8c7d]
                hover:shadow-xl
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