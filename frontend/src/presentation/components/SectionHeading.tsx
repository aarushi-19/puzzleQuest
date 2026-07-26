type Props = {
  title: string;
  subtitle: string;
};

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <>

      <h1 className="text-5xl font-bold text-[#4b3f34]">
        {title}
      </h1>

      <p className="mt-4 text-lg text-[#6b5f52]">
        {subtitle}
      </p>

    </>
  );
}