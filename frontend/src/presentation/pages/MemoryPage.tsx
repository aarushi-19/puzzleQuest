import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";

import { useGift } from "../../context/GiftContext";

export default function MemoryPage() {
  const navigate = useNavigate();
  const { memoryId } = useParams();

  const { gift } = useGift();

  const memory = gift.memories.find(
    (item) => item.id === memoryId
  );

  const [imageUrl, setImageUrl] = useState<
    string | null
  >(null);

  /*
   * Create a temporary URL for the uploaded image.
   */

  useEffect(() => {
    if (!memory?.image) {
      setImageUrl(null);
      return;
    }

    const url = URL.createObjectURL(memory.image);

    setImageUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [memory?.image]);

  /*
   * Memory doesn't exist.
   */

  if (!memory) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#edf2e8] px-6">
        <div className="text-center">

          <h1 className="text-3xl font-serif font-semibold text-[#4b3f34]">
            Memory not found
          </h1>

          <button
            type="button"
            onClick={() => navigate("/journey")}
            className="
              mt-6
              rounded-2xl
              bg-[#d69a8c]
              px-8
              py-3
              font-semibold
              text-white
              transition
              hover:bg-[#c78879]
            "
          >
            Back to Journey
          </button>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#edf2e8] px-6 py-10">

      <div className="mx-auto max-w-4xl">

        {/* Back button */}

        <button
          type="button"
          onClick={() => navigate("/journey")}
          className="
            flex
            items-center
            gap-2
            text-sm
            font-medium
            text-[#8b6f47]
            transition
            hover:text-[#d69a8c]
          "
        >
          <ArrowLeft className="h-4 w-4" />

          Back to Journey
        </button>

        {/* Header */}

        <div className="mt-10 text-center">

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
            {memory.title || "A Special Memory"}
          </h1>

          <div className="mt-5 flex items-center justify-center gap-2 text-[#7d8e74]">
            <Heart className="h-4 w-4 fill-current" />

            <span>
              {gift.recipientName}
            </span>
          </div>

        </div>

        {/* Main Memory Card */}

        <div
          className="
            mt-12
            overflow-hidden
            rounded-[36px]
            border
            border-[#e6ddd1]
            bg-[#fffdf9]
            shadow-2xl
          "
        >

          {/* Image */}

          {imageUrl ? (
            <div className="bg-[#f8f4ef] p-5 md:p-8">

              <img
                src={imageUrl}
                alt={memory.title || "Memory"}
                className="
                  mx-auto
                  max-h-[65vh]
                  w-full
                  rounded-[28px]
                  object-contain
                  shadow-lg
                "
              />

            </div>
          ) : (
            <div
              className="
                flex
                h-80
                items-center
                justify-center
                bg-[#f8f4ef]
                text-[#8b7c70]
              "
            >
              No photo was uploaded for this memory.
            </div>
          )}

          {/* Story */}

          <div className="px-8 py-10 md:px-14 md:py-14">

            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f8ebe7]
                  text-[#d69a8c]
                "
              >
                <Heart className="h-5 w-5 fill-current" />
              </div>

              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#9f8b73]
                "
              >
                The Story
              </p>

            </div>

            <p
              className="
                mt-7
                whitespace-pre-wrap
                text-lg
                leading-9
                text-[#5c5148]
              "
            >
              {memory.story ||
                "This memory doesn't have a story yet."}
            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-10 text-center">

          <p
            className="
              italic
              text-[#7d8e74]
            "
          >
            A little moment worth remembering forever ♡
          </p>

          <button
            type="button"
            onClick={() => navigate("/journey")}
            className="
              mt-6
              rounded-2xl
              border
              border-[#d69a8c]
              bg-white
              px-10
              py-4
              font-semibold
              text-[#d69a8c]
              shadow-sm
              transition
              hover:bg-[#f8ebe7]
            "
          >
            ← Back to Journey
          </button>

        </div>

      </div>

    </main>
  );
}