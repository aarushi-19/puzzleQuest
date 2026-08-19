import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useGift } from "../../context/GiftContext";

export default function MemoryGalleryPage() {
  const navigate = useNavigate();
  const { gift } = useGift();

  const [selectedMemoryId, setSelectedMemoryId] =
    useState<string | null>(null);

  const selectedMemory = gift.memories.find(
    (memory) => memory.id === selectedMemoryId
  );

  const [selectedImageUrl, setSelectedImageUrl] =
    useState<string | null>(null);

  /*
   * Create a temporary URL for the selected image.
   */

  useEffect(() => {
    if (!selectedMemory?.image) {
      setSelectedImageUrl(null);
      return;
    }

    const url = URL.createObjectURL(
      selectedMemory.image
    );

    setSelectedImageUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [selectedMemory]);

  return (
    <main
      className="
        min-h-screen
        bg-[#edf2e8]
        px-6
        py-12
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* Back */}

        <button
          type="button"
          onClick={() => navigate("/journey")}
          className="
            mb-8
            text-sm
            font-medium
            text-[#8b6f47]
            transition
            hover:text-[#d69a8c]
          "
        >
          ← Back to Journey
        </button>

        {/* Header */}

        <header className="text-center">

          <div className="text-5xl">
            ❤️
          </div>

          <p
            className="
              mt-5
              text-sm
              uppercase
              tracking-[0.35em]
              text-[#b9966d]
            "
          >
            Your Memories
          </p>

          <h1
            className="
              mt-3
              text-5xl
              font-serif
              font-semibold
              text-[#4b3f34]
              md:text-6xl
            "
          >
            Our Journey Together
          </h1>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-lg
              leading-8
              text-[#6d6257]
            "
          >
            Every memory you unlocked is
            kept here for you to revisit.
          </p>

        </header>

        {/* Memory Grid */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {gift.memories.map(
            (memory, index) => {
              const imageUrl =
                memory.image
                  ? URL.createObjectURL(
                      memory.image
                    )
                  : null;

              return (
                <button
                  key={memory.id}
                  type="button"
                  onClick={() =>
                    setSelectedMemoryId(
                      memory.id
                    )
                  }
                  className="
                    group
                    overflow-hidden
                    rounded-3xl
                    border
                    border-[#e6ddd1]
                    bg-white
                    text-left
                    shadow-lg
                    transition
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-2xl
                  "
                >
                  {/* Photo */}

                  <div
                    className="
                      relative
                      aspect-[4/3]
                      overflow-hidden
                      bg-[#f8f4ef]
                    "
                  >
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={
                          memory.title ||
                          `Memory ${
                            index + 1
                          }`
                        }
                        className="
                          h-full
                          w-full
                          object-cover
                          transition
                          duration-500
                          group-hover:scale-105
                        "
                      />
                    ) : (
                      <div
                        className="
                          flex
                          h-full
                          items-center
                          justify-center
                          text-5xl
                        "
                      >
                        ❤️
                      </div>
                    )}

                    {/* Memory number */}

                    <div
                      className="
                        absolute
                        left-4
                        top-4
                        rounded-full
                        bg-white/90
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-[#4b3f34]
                        shadow-md
                        backdrop-blur
                      "
                    >
                      Memory {index + 1}
                    </div>
                  </div>

                  {/* Content */}

                  <div className="p-6">

                    <h2
                      className="
                        text-2xl
                        font-serif
                        font-semibold
                        text-[#4b3f34]
                      "
                    >
                      {memory.title ||
                        `Memory ${
                          index + 1
                        }`}
                    </h2>

                    <p
                      className="
                        mt-3
                        line-clamp-3
                        leading-7
                        text-[#6d6257]
                      "
                    >
                      {memory.story ||
                        "A beautiful memory waiting to be revisited."}
                    </p>

                    <p
                      className="
                        mt-5
                        text-sm
                        font-semibold
                        text-[#d69a8c]
                      "
                    >
                      View Memory →
                    </p>

                  </div>
                </button>
              );
            }
          )}
        </div>

        {/* Bottom Message */}

        <div
          className="
            mx-auto
            mt-16
            max-w-2xl
            rounded-3xl
            border
            border-[#d8e5d2]
            bg-[#f1f7ee]
            px-8
            py-8
            text-center
          "
        >
          <p
            className="
              font-serif
              text-xl
              italic
              text-[#7d8e74]
            "
          >
            "The best things in life are
            the moments we remember."
          </p>
        </div>

      </div>

      {/* =====================================
          MEMORY DETAIL MODAL
         ===================================== */}

      {selectedMemory && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-[#3a3028]/60
            px-6
            py-8
            backdrop-blur-sm
          "
          onClick={() =>
            setSelectedMemoryId(null)
          }
        >
          <div
            className="
              max-h-[90vh]
              w-full
              max-w-3xl
              overflow-y-auto
              rounded-[32px]
              bg-[#fffdf9]
              shadow-2xl
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* Image */}

            {selectedImageUrl && (
              <div className="overflow-hidden rounded-t-[32px]">
                <img
                  src={selectedImageUrl}
                  alt={
                    selectedMemory.title ||
                    "Memory"
                  }
                  className="
                    max-h-[60vh]
                    w-full
                    object-contain
                    bg-[#f8f4ef]
                  "
                />
              </div>
            )}

            {/* Story */}

            <div className="p-8 md:p-10">

              <p
                className="
                  text-sm
                  uppercase
                  tracking-[0.3em]
                  text-[#b9966d]
                "
              >
                Memory
              </p>

              <h2
                className="
                  mt-3
                  text-4xl
                  font-serif
                  font-semibold
                  text-[#4b3f34]
                "
              >
                {selectedMemory.title ||
                  "A Special Memory"}
              </h2>

              <div
                className="
                  my-7
                  h-px
                  bg-[#e6ddd1]
                "
              />

              <p
                className="
                  whitespace-pre-line
                  text-lg
                  leading-9
                  text-[#5c5148]
                "
              >
                {selectedMemory.story ||
                  "This memory was made with love."}
              </p>

              {/* Close */}

              <button
                type="button"
                onClick={() =>
                  setSelectedMemoryId(null)
                }
                className="
                  mt-10
                  w-full
                  rounded-2xl
                  bg-[#d69a8c]
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#c78879]
                "
              >
                Close Memory
              </button>

            </div>

          </div>
        </div>
      )}

    </main>
  );
}