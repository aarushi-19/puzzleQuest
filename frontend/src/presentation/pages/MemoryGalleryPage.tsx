import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useGift } from "../../context/GiftContext";

export default function MemoryGalleryPage() {
  const navigate = useNavigate();
  const { gift } = useGift();

  const [imageUrls, setImageUrls] = useState<
    Record<string, string>
  >({});

  const [selectedMemoryId, setSelectedMemoryId] =
    useState<string | null>(null);

  /*
   * Selected memory.
   */

  const selectedMemory = gift.memories.find(
    (memory) => memory.id === selectedMemoryId
  );

  const selectedImageUrl =
    selectedMemoryId
      ? imageUrls[selectedMemoryId] ?? null
      : null;

  /*
   * Create image URLs once for the current
   * memories and clean them up properly.
   */

  useEffect(() => {
    const urls: Record<string, string> = {};

    gift.memories.forEach((memory) => {
      if (memory.image) {
        urls[memory.id] =
          URL.createObjectURL(memory.image);
      }
    });

    setImageUrls(urls);

    /*
     * Clean up object URLs when the memories
     * change or the page is unmounted.
     */

    return () => {
      Object.values(urls).forEach((url) => {
        URL.revokeObjectURL(url);
      });
    };
  }, [gift.memories]);

  /*
   * Close the memory modal.
   */

  function closeMemory() {
    setSelectedMemoryId(null);
  }

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

        {/* =====================================
            BACK
           ===================================== */}

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

        {/* =====================================
            HEADER
           ===================================== */}

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

        {/* =====================================
            MEMORY GRID
           ===================================== */}

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
                imageUrls[memory.id];

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

                  {/* =================================
                      PHOTO
                     ================================= */}

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
                          flex-col
                          items-center
                          justify-center
                          text-center
                        "
                      >

                        <div className="text-5xl">
                          ❤️
                        </div>

                        <p
                          className="
                            mt-3
                            text-sm
                            text-[#8b7c70]
                          "
                        >
                          Image unavailable
                        </p>

                      </div>
                    )}

                    {/* Memory Number */}

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

                  {/* =================================
                      CONTENT
                     ================================= */}

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

                    {/* Story */}

                    {memory.story ? (
                      <p
                        className="
                          mt-3
                          line-clamp-3
                          whitespace-pre-line
                          leading-7
                          text-[#6d6257]
                        "
                      >
                        {memory.story}
                      </p>
                    ) : (
                      <p
                        className="
                          mt-3
                          leading-7
                          italic
                          text-[#9a8d80]
                        "
                      >
                        No story was added
                        for this memory.
                      </p>
                    )}

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

        {/* =====================================
            BOTTOM MESSAGE
           ===================================== */}

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
          onClick={closeMemory}
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

            {/* =================================
                IMAGE
               ================================= */}

            {selectedImageUrl ? (
              <div
                className="
                  overflow-hidden
                  rounded-t-[32px]
                  bg-[#f8f4ef]
                "
              >
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
                  "
                />
              </div>
            ) : (
              <div
                className="
                  flex
                  h-72
                  flex-col
                  items-center
                  justify-center
                  rounded-t-[32px]
                  bg-[#f8f4ef]
                "
              >
                <div className="text-5xl">
                  ❤️
                </div>

                <p
                  className="
                    mt-3
                    text-[#8b7c70]
                  "
                >
                  Image unavailable
                </p>
              </div>
            )}

            {/* =================================
                STORY
               ================================= */}

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

              {selectedMemory.story ? (
                <p
                  className="
                    whitespace-pre-line
                    text-lg
                    leading-9
                    text-[#5c5148]
                  "
                >
                  {selectedMemory.story}
                </p>
              ) : (
                <p
                  className="
                    text-lg
                    italic
                    text-[#8b7c70]
                  "
                >
                  This memory was made
                  with love.
                </p>
              )}

              {/* Close */}

              <button
                type="button"
                onClick={closeMemory}
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