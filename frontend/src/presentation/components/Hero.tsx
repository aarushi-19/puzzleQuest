import Button from "./Button";

export default function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "120px 20px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <p
        style={{
          color: "#8A6F55",
          letterSpacing: "3px",
          fontSize: "14px",
          textTransform: "uppercase",
          marginBottom: "18px",
          fontWeight: 600,
        }}
      >
        A GIFT THEY'LL NEVER FORGET
      </p>

      <h1
        style={{
          fontSize: "72px",
          color: "#49382E",
          fontWeight: 700,
          lineHeight: 1.05,
          marginBottom: "28px",
        }}
      >
        Turn Memories
        <br />
        into Beautiful
        <br />
        Puzzle Gifts
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#6F6258",
          maxWidth: "650px",
          margin: "0 auto",
          lineHeight: 1.8,
          marginBottom: "50px",
        }}
      >
        Create a journey filled with photos, heartfelt messages and interactive
        puzzles that unlock one memory at a time.
      </p>

      <Button>
        Create Your Gift
      </Button>
    </section>
  );
}