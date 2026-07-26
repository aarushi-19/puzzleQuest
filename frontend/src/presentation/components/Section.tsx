type Props = {
  children: React.ReactNode;
};

export default function Section({ children }: Props) {
  return (
    <section
      style={{
        padding: "90px 0",
      }}
    >
      {children}
    </section>
  );
}