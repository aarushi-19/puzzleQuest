type Props = {
  emoji: string;
  title: string;
  description: string;
};

export default function StepCard({
  emoji,
  title,
  description,
}: Props) {
  return (
    <div
      style={{
        background: "#FFF9F2",
        borderRadius: "28px",
        padding: "35px",
        boxShadow: "0 15px 45px rgba(0,0,0,.08)",
        textAlign: "center",
        transition: ".3s",
      }}
    >
      <div
        style={{
          fontSize: "42px",
          marginBottom: "18px",
        }}
      >
        {emoji}
      </div>

      <h3
        style={{
          color: "#4A4038",
          marginBottom: "15px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#7A7067",
          lineHeight: 1.7,
        }}
      >
        {description}
      </p>
    </div>
  );
}