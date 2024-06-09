import type { ReactNode } from "react";

import { twMerge } from "tailwind-merge";

const Page = ({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
  className?: string;
}) => {
  const gridCols =
    "grid-cols-[[content-start]_1fr_[content_end]] lg:grid-cols-[[full-width-start]_100px_[breakout-start]_100px_[content-start]_1fr_[content-end]_100px_[breakout-end]_100px_[full-width-end]]";

  return (
    <div
      className={twMerge(
        "grid-page mx-auto grid h-full w-full grid-cols-[[full-width-start]_100px_[breakout-start]_100px_[content-start]_1fr_[content-end]_100px_[breakout-end]_100px_[full-width-end]] bg-green-800",
        gridCols,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Page;
