import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Background({ children }: Props) {
  return (
    <div className="floral-background min-h-screen">
      {children}
    </div>
  );
}