import { useNavigate } from "react-router-dom";
import { useGift } from "../../context/GiftContext";

import ProgressStepper from "../components/ProgressStepper";
import PageContainer from "../components/PageContainer";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/ui/Button";

export default function CreateMemoryPage() {
  const navigate = useNavigate();
  const { gift, setGift } = useGift();

  function nextStep() {
    if (
      !gift.giftTitle.trim() ||
      !gift.recipientName.trim()
    ) {
      return;
    }

    navigate("/memories");
  }

  return (
    <PageContainer>
      <ProgressStepper currentStep={1} />

      <p className="text-sm uppercase tracking-[0.3em] text-[#B9966D]">
        STEP 1 OF 4
      </p>

      <div className="mt-4">
        <SectionHeading
          title="Create Your Puzzle Gift"
          subtitle="Let's start with a few details before adding your memories."
        />
      </div>

      <div className="mt-10 space-y-8">

        {/* Gift Title */}

        <div>
          <label className="mb-3 block font-semibold text-[#4B3F34]">
            Gift Title
          </label>

          <input
            type="text"
            placeholder="Our Goa Memories"
            value={gift.giftTitle}
            onChange={(e) =>
              setGift({
                ...gift,
                giftTitle: e.target.value,
              })
            }
            className="
              w-full
              rounded-2xl
              border
              border-[#DDD2C4]
              bg-white
              px-5
              py-4
              text-lg
              text-[#4B3F34]
              outline-none
              transition
              focus:border-[#D69A8C]
            "
          />
        </div>

        {/* Recipient */}

        <div>
          <label className="mb-3 block font-semibold text-[#4B3F34]">
            Recipient Name
          </label>

          <input
            type="text"
            placeholder="Aarav"
            value={gift.recipientName}
            onChange={(e) =>
              setGift({
                ...gift,
                recipientName: e.target.value,
              })
            }
            className="
              w-full
              rounded-2xl
              border
              border-[#DDD2C4]
              bg-white
              px-5
              py-4
              text-lg
              text-[#4B3F34]
              outline-none
              transition
              focus:border-[#D69A8C]
            "
          />
        </div>

        {/* Occasion */}

        <div>
          <label className="mb-3 block font-semibold text-[#4B3F34]">
            Occasion
          </label>

          <select
            value={gift.occasion}
            onChange={(e) =>
              setGift({
                ...gift,
                occasion: e.target.value,
              })
            }
            className="
              w-full
              rounded-2xl
              border
              border-[#DDD2C4]
              bg-white
              px-5
              py-4
              text-lg
              text-[#4B3F34]
              outline-none
              transition
              focus:border-[#D69A8C]
            "
          >
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Wedding</option>
            <option>Graduation</option>
            <option>Friendship</option>
            <option>Valentine's Day</option>
            <option>Just Because</option>
          </select>
        </div>

        {/* Cover Image */}

        <div>
          <label className="mb-3 block font-semibold text-[#4B3F34]">
            Cover Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setGift({
                ...gift,
                coverImage: e.target.files?.[0] ?? null,
              })
            }
            className="
              w-full
              rounded-2xl
              border
              border-dashed
              border-[#DDD2C4]
              bg-white
              px-5
              py-4
              text-[#6B655D]
            "
          />
        </div>

      </div>

      <div className="mt-12">
        <Button onClick={nextStep}>
          Continue →
        </Button>
      </div>
    </PageContainer>
  );
}