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

  const total = gift.memories.length;

  const journeyComplete =
    total > 0 && completed === total;

  /*
   * ==========================================
   * FINAL JOURNEY SCREEN
   * ==========================================
   */

  if (journeyComplete) {
    return (
      <main
        className="
          min-h-screen
          bg-[#edf2e8]
          px-6
          py-12
        "
      >
        <div
          className="
            mx-auto
            flex
            min-h-[80vh]
            max-w-4xl
            items-center
            justify-center
          "
        >
          <div
            className="
              w-full
              rounded-[40px]
              border
              border-[#e6ddd1]
              bg-[#fffdf9]
              px-8
              py-14
              text-center
              shadow-2xl
              md:px-16
              md:py-20
            "
          >

            {/* Heart */}

            <div
              className="
                mx-auto
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                bg-[#f8ebe7]
                text-5xl
                shadow-sm
              "
            >
              ❤️
            </div>

            {/* Small Heading */}

            <p
              className="
                mt-8
                text-sm
                uppercase
                tracking-[0.35em]
                text-[#b9966d]
              "
            >
              Journey Complete
            </p>

            {/* Main Heading */}

            <h1
              className="
                mt-4
                text-5xl
                font-serif
                font-semibold
                text-[#4b3f34]
                md:text-6xl
              "
            >
              You unlocked every memory.
            </h1>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-7
                max-w-2xl
                text-lg
                leading-9
                text-[#6d6257]
              "
            >
              Every puzzle has been solved
              and every special moment has
              been revealed.
            </p>

            {/* Quote */}

            <p
              className="
                mx-auto
                mt-6
                max-w-xl
                font-serif
                text-xl
                italic
                text-[#7d8e74]
              "
            >
              A collection of memories,
              made just for you. ♡
            </p>

            {/* Progress */}

            <div
              className="
                mx-auto
                mt-10
                max-w-md
              "
            >
              <JourneyProgress
                total={total}
                completed={completed}
              />
            </div>

            {/* Relive Memories */}

            <div
              className="
                mx-auto
                mt-10
                flex
                max-w-md
                flex-col
                gap-4
              "
            >
              <button
                type="button"
                onClick={() =>
                  navigate("/gallery")
                }
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#d69a8c]
                  bg-white
                  py-4
                  font-semibold
                  text-[#d69a8c]
                  transition
                  hover:bg-[#f8ebe7]
                "
              >
                Relive the Memories ❤️
              </button>
            </div>

          </div>
        </div>
      </main>
    );
  }

  /*
   * ==========================================
   * NORMAL JOURNEY
   * ==========================================
   */

  return (
    <main
      className="
        min-h-screen
        bg-[#edf2e8]
        px-6
        py-12
      "
    >
      <div className="mx-auto max-w-5xl">

        {/* Header */}

        <JourneyHeader
          recipient={gift.recipientName}
          occasion={gift.occasion}
          title={gift.giftTitle}
        />

        {/* Memory Cards */}

        <div
          className="
            mt-12
            space-y-8
          "
        >
          {gift.memories.map(
            (memory, index) => (
              <JourneyCard
                key={memory.id}
                memory={memory}
                index={index}
                onStart={() =>
                  navigate(
                    `/puzzle/${memory.id}`
                  )
                }
                onView={() =>
                  navigate(
                    `/memory/${memory.id}`
                  )
                }
              />
            )
          )}
        </div>

        {/* Progress */}

        <div className="mt-12">
          <JourneyProgress
            total={total}
            completed={completed}
          />
        </div>

      </div>
    </main>
  );
}