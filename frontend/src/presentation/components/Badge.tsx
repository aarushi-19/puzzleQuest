type Props = {
  children: React.ReactNode;
};

export default function Badge({
  children,
}: Props) {
  return (
    <span className="rounded-full bg-[#f6ece7] px-4 py-2 text-sm font-semibold text-[#b57767]">
      {children}
    </span>
  );
}