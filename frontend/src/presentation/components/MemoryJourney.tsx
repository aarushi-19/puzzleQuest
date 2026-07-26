export default function MemoryJourney() {
  const steps = [
    {
      emoji: "📸",
      title: "Choose a Memory",
      text: "Upload a favourite photo and write the story behind it.",
    },
    {
      emoji: "🧩",
      title: "Pick a Puzzle",
      text: "Hide every memory behind a fun challenge.",
    },
    {
      emoji: "💌",
      title: "Reveal a Message",
      text: "Every solved puzzle unlocks a heartfelt message.",
    },
    {
      emoji: "🎁",
      title: "Final Surprise",
      text: "End the journey with the biggest memory of all.",
    },
  ];

  return (
    <section id="journey" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-[#8B6F47] text-sm font-semibold">
            THE JOURNEY
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#4B3F34]">
            Every Gift Tells a Story
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6D6257]">
            Build an unforgettable experience where every solved puzzle
            unlocks another precious memory.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-4">

          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl bg-white/80 p-8 text-center shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-2"
            >
              <div className="mb-5 text-5xl">{step.emoji}</div>

              <h3 className="mb-3 text-2xl font-semibold text-[#4B3F34]">
                {step.title}
              </h3>

              <p className="leading-7 text-[#6D6257]">
                {step.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}