import Container from "./PageContainer";
import Section from "./Section";
import StepCard from "./StepCard";

export default function Journey() {
  return (
    <Section>
      <Container>

        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <p
            style={{
              color: "#8A6F55",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            HOW IT WORKS
          </p>

          <h2
            style={{
              fontSize: "48px",
              color: "#49382E",
              marginTop: "15px",
              marginBottom: "20px",
            }}
          >
            Create a Gift They'll Never Forget
          </h2>

          <p
            style={{
              color: "#6F6258",
              maxWidth: "650px",
              margin: "0 auto",
              fontSize: "20px",
              lineHeight: 1.8,
            }}
          >
            Turn your favourite memories into a beautiful journey filled with
            puzzles, photos and heartfelt messages.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
            gap: "30px",
          }}
        >
          <StepCard
            emoji="📸"
            title="Add Memories"
            description="Upload your favourite photos and write heartfelt stories behind every special moment."
          />

          <StepCard
            emoji="🧩"
            title="Choose Puzzles"
            description="Turn every memory into a fun puzzle that your loved one has to solve before unlocking it."
          />

          <StepCard
            emoji="🎁"
            title="Share Your Gift"
            description="Send one beautiful link and watch them discover every memory one puzzle at a time."
          />
        </div>

      </Container>
    </Section>
  );
}