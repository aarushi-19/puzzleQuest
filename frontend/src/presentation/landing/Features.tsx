import Container from "../components/ui/Container";

const features = [
  {
    icon: "🧩",
    title: "Turn Memories into Puzzles",
    description:
      "Upload your favourite photos and transform them into beautiful interactive puzzles.",
  },
  {
    icon: "💌",
    title: "Hidden Messages",
    description:
      "Reveal heartfelt letters, stories and memories as each puzzle is completed.",
  },
  {
    icon: "🎁",
    title: "The Perfect Gift",
    description:
      "Create a meaningful experience for birthdays, anniversaries and special occasions.",
  },
];

export default function Features() {
  return (
    <section className="py-28">
      <Container>
        <div className="text-center">
          <h2
            className="text-[46px] font-semibold text-[#433B32]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Why PuzzleQuest?
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[18px] text-[#6B655D]">
            More than a puzzle. Every gift becomes a memorable experience.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                rounded-[28px]
                bg-white/80
                p-8
                shadow-md
                backdrop-blur-sm
                transition
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="mt-6 text-2xl font-semibold text-[#433B32]">
                {feature.title}
              </h3>

              <p className="mt-4 leading-8 text-[#6B655D]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}