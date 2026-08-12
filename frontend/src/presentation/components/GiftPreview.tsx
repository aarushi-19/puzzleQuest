import Card from "./ui/Card";
import Container from "./ui/Container";

const flow = [
  {
    emoji: "🎁",
    title: "Gift Box",
    description: "Your recipient opens a beautifully wrapped digital gift.",
  },
  {
    emoji: "🗺️",
    title: "Journey Begins",
    description: "A map guides them through every precious memory.",
  },
  {
    emoji: "📸",
    title: "Memory",
    description: "A photo and story are revealed before each challenge.",
  },
  {
    emoji: "🧩",
    title: "Puzzle",
    description: "Solve a puzzle to unlock the next chapter.",
  },
  {
    emoji: "💌",
    title: "Final Letter",
    description: "Finish the journey by opening a heartfelt envelope.",
  },
];

export default function GiftPreview() {
  return (
    <section className="py-28 bg-[#F9F7F2]">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#B97A56]">
            THE EXPERIENCE
          </p>

          <h2
            className="text-5xl font-semibold"
            style={{
              fontFamily: "Playfair Display",
            }}
          >
            A Gift They'll Never Forget
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#7A746C]">
            Every interaction is carefully designed to build excitement,
            nostalgia, and emotion until the final heartfelt letter is revealed.
          </p>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-6">
          {flow.map((step, index) => (
            <div
              key={step.title}
              className="flex items-center"
            >
              <Card className="w-60 text-center">
                <div className="mb-5 text-5xl">
                  {step.emoji}
                </div>

                <h3 className="mb-3 text-2xl font-semibold">
                  {step.title}
                </h3>

                <p className="leading-7 text-[#7A746C]">
                  {step.description}
                </p>
              </Card>

              {index !== flow.length - 1 && (
                <div className="mx-4 hidden text-4xl text-[#6F8F72] lg:block">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}