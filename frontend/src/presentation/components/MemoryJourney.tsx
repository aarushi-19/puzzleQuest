import Card from "./ui/Card";
import Container from "./ui/Container";

const steps = [
  {
    emoji: "📸",
    title: "Choose Your Memories",
    description:
      "Upload photos, videos, and heartfelt stories that will become part of a beautiful interactive experience.",
  },
  {
    emoji: "🧩",
    title: "Design the Journey",
    description:
      "Arrange memories in any order and place engaging puzzles between them to build suspense.",
  },
  {
    emoji: "💌",
    title: "Unlock the Letter",
    description:
      "After solving every puzzle, your recipient reaches the final envelope containing your personal letter.",
  },
  {
    emoji: "🎁",
    title: "Share the Experience",
    description:
      "Publish your gift and send a private link for an unforgettable memory journey.",
  },
];

export default function MemoryJourney() {
  return (
    <section id="journey" className="py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#B97A56]">
            HOW IT WORKS
          </p>

          <h2
            className="text-5xl font-semibold"
            style={{ fontFamily: "Playfair Display" }}
          >
            Every Gift Becomes a Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#7A746C]">
            PuzzleQuest transforms ordinary memories into an adventure where
            each solved puzzle reveals another chapter of your story.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card
              key={step.title}
              className="text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 text-5xl">{step.emoji}</div>

              <div className="mb-3 text-sm font-semibold text-[#B97A56]">
                Step {index + 1}
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                {step.title}
              </h3>

              <p className="leading-7 text-[#7A746C]">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}