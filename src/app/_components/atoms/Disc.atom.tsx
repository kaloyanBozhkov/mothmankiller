import { twMerge } from "tailwind-merge";

import Image from "next/image";

const Disc = ({
  coverImgSrc,
  className = "",
}: {
  coverImgSrc?: string;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "bg-vinyl relative h-full w-full animate-[spin_3s_infinite_linear] bg-contain",
        className,
      )}
    >
      {coverImgSrc && (
        <div className="clip-circlele-44perc absolute inset-[31.83%] z-10 bg-slate-400">
          <Image
            src={coverImgSrc}
            width={200}
            height={200}
            alt="cover"
            className="clip-circlele-44perc h-full w-full"
          />
        </div>
      )}
    </div>
  );
};

export default Disc;
