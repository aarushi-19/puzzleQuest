type Memory = {
  title: string;
  story: string;
  image: File | null;
};

type MemoryCardProps = {
  index: number;
  memory: Memory;
  onTitleChange: (value: string) => void;
  onStoryChange: (value: string) => void;
  onImageChange: (file: File | null) => void;
};

export default function MemoryCard({
  index,
  memory,
  onTitleChange,
  onStoryChange,
  onImageChange,
}: MemoryCardProps) {
  return (
    <div className="rounded-[30px] border border-[#e6ddd1] bg-[#fcfaf7] p-8 shadow-lg transition-all duration-300 hover:shadow-xl">

      {/* Memory Number */}

      <h2 className="mb-8 text-3xl font-bold text-[#4b3f34]">
        Memory {index + 1}
      </h2>

      {/* Title */}

      <label className="mb-2 block font-medium text-[#6d6257]">
        Memory Title
      </label>

      <input
        type="text"
        placeholder="The Day We Met"
        value={memory.title}
        onChange={(e) => onTitleChange(e.target.value)}
        className="mb-6 w-full rounded-2xl border border-[#ddd2c4] bg-white px-5 py-4 text-[#4b3f34] outline-none transition focus:border-[#d69a8c]"
      />

      {/* Story */}

      <label className="mb-2 block font-medium text-[#6d6257]">
        Your Story
      </label>

      <textarea
        rows={6}
        placeholder="Tell the story behind this beautiful memory..."
        value={memory.story}
        onChange={(e) => onStoryChange(e.target.value)}
        className="mb-8 w-full rounded-2xl border border-[#ddd2c4] bg-white px-5 py-4 text-[#4b3f34] outline-none transition focus:border-[#d69a8c]"
      />

      {/* Upload */}

      <label className="mb-3 block font-medium text-[#6d6257]">
        Upload Photo
      </label>

      <label className="block cursor-pointer">

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            onImageChange(e.target.files?.[0] || null)
          }
          className="hidden"
        />

        {memory.image ? (

          <div className="overflow-hidden rounded-3xl border border-[#e6ddd1] bg-white shadow-md transition hover:shadow-lg">

            <img
              src={URL.createObjectURL(memory.image)}
              alt="Preview"
              className="h-72 w-full object-cover"
            />

            <div className="flex items-center justify-between p-5">

              <div>
                <p className="font-semibold text-[#4b3f34]">
                  ✓ {memory.image.name}
                </p>

                <p className="text-sm text-[#8b7c70]">
                  Click to replace this photo
                </p>
              </div>

              <div className="rounded-full bg-[#f6ece7] px-4 py-2 text-sm font-semibold text-[#b57767]">
                Change
              </div>

            </div>

          </div>

        ) : (

          <div className="flex h-72 flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[#d8cec1] bg-[#faf6ef] transition-all duration-300 hover:border-[#d69a8c] hover:bg-[#f6f1e8]">

            <div className="text-6xl">
              📷
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-[#4b3f34]">
              Upload Your Memory
            </h3>

            <p className="mt-3 text-[#8b7c70]">
              Click anywhere to browse
            </p>

            <p className="mt-6 text-sm tracking-wide text-[#b1a292]">
              JPG • PNG • JPEG • HEIC
            </p>

          </div>

        )}

      </label>

    </div>
  );
}