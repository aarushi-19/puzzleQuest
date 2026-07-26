type Props = {
  children: React.ReactNode;
};

export default function Card({
  children,
}: Props) {
  return (
    <div className="rounded-[30px] border border-[#e6ddd1] bg-[#fcfaf7] p-8 shadow-lg transition-all duration-300 hover:shadow-xl">

      {children}

    </div>
  );
}