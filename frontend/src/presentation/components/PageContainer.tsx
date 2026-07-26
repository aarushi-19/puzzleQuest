type PageContainerProps = {
  children: React.ReactNode;
};

export default function PageContainer({
  children,
}: PageContainerProps) {
  return (
    <main className="min-h-screen flex justify-center px-6 py-16">
      <div className="w-full max-w-6xl">
        {children}
      </div>
    </main>
  );
}