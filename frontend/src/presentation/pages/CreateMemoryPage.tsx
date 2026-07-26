import { useNavigate } from "react-router-dom";
import { useGift } from "../../context/GiftContext";

import ProgressStepper from "../components/ProgressStepper";
import PageContainer from "../components/PageContainer";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";

export default function CreateMemoryPage() {
  const navigate = useNavigate();
  const { gift, setGift } = useGift();

  function nextStep() {
    if (!gift.recipient.trim()) return;

    navigate("/memories");
  }

  return (
    <PageContainer>

      <ProgressStepper currentStep={1} />

      <p className="text-sm uppercase tracking-[0.3em] text-[#b9966d]">
        STEP 1 OF 4
      </p>

      <div className="mt-4">
        <SectionHeading
          title="Let's begin your journey"
          subtitle="Tell us who this special gift is for."
        />
      </div>

      <div className="mt-10 space-y-8">

        {/* Recipient */}

        <div>

          <label className="mb-3 block font-semibold text-[#4b3f34]">
            Recipient
          </label>

          <input
            type="text"
            placeholder="Name"
            value={gift.recipient}
            onChange={(e) =>
              setGift({
                ...gift,
                recipient: e.target.value,
              })
            }
            className="w-full rounded-2xl border border-[#ddd2c4] bg-white px-5 py-4 text-lg text-[#4b3f34] outline-none transition focus:border-[#d69a8c]"
          />

        </div>

        {/* Occasion */}

        <div>

          <label className="mb-3 block font-semibold text-[#4b3f34]">
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
            className="w-full rounded-2xl border border-[#ddd2c4] bg-white px-5 py-4 text-lg text-[#4b3f34] outline-none transition focus:border-[#d69a8c]"
          >
            <option value="">Select an occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
            <option>Valentine's Day</option>
            <option>Friendship</option>
            <option>Congratulations</option>
            <option>Just Because</option>
          </select>

        </div>

        {/* Journey Title */}

        <div>

          <label className="mb-3 block font-semibold text-[#4b3f34]">
            Journey Title
          </label>

          <input
            type="text"
            placeholder="Enter a journey title"
            value={gift.journeyTitle}
            onChange={(e) =>
              setGift({
                ...gift,
                journeyTitle: e.target.value,
              })
            }
            className="w-full rounded-2xl border border-[#ddd2c4] bg-white px-5 py-4 text-lg text-[#4b3f34] outline-none transition focus:border-[#d69a8c]"
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