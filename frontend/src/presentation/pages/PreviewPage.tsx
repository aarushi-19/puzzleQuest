import { useNavigate } from "react-router-dom";
import ProgressStepper from "../components/ProgressStepper";
import JourneyHeader from "../journey/JourneyHeader";
import PreviewMemoryCard from "../components/PreviewMemoryCard";
import { useGift } from "../../context/GiftContext";

export default function PreviewPage() {
  const navigate = useNavigate();
  const { gift } = useGift();

  const handleGenerateGift = () => {
    navigate("/gift");
  };

  const handleEditJourney = () => {
    navigate("/memories"); // Change if your edit page is different
  };

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-6xl rounded-[36px] border border-[#e6ddd1] bg-white/75 p-10 shadow-2xl backdrop-blur-md">
        <ProgressStepper currentStep={4} />

        <JourneyHeader
          recipient={gift.recipient}
          occasion={gift.occasion}
          title={gift.journeyTitle}
        />

        <div className="mt-12 space-y-10">
          {gift.memories.map((memory, index) => (
            <PreviewMemoryCard
              key={index}
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

        <div className="mt-14 flex flex-col gap-4 md:flex-row">
          <button
            onClick={handleEditJourney}
            className="flex-1 rounded-2xl border border-[#d69a8c] py-4 font-semibold text-[#d69a8c] transition hover:bg-[#f7ebe7]"
          >
            Edit Journey
          </button>

          <button
            onClick={handleGenerateGift}
            className="flex-1 rounded-2xl bg-[#d69a8c] py-4 font-semibold text-white shadow-lg transition hover:bg-[#c78879]"
          >
            Generate Gift 🎁
          </button>
        </div>
      </div>
    </main>
  );
}