import type { ReactNode } from "react";

import { twMerge } from "tailwind-merge";

const Main = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={twMerge("bg-cover-1 bg-cover bg-center", className)}>
      <div className="fixed inset-0 z-10">{children}</div>
      <div className="inset fixed z-0 h-full w-full bg-white/10 backdrop-blur-xl"></div>
    </div>
  );
};

export default Main;
