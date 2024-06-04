import Link from "next/link";
import { twMerge } from "tailwind-merge";

const AlbumCover = ({
  img,
  link,
  className,
}: {
  img: string;
  link: string;
  className: string;
}) => {
  return (
    <Link className={twMerge("", className)} href={link}>
      <div className="h-[300px] w-[300px] shadow-lg transition-all hover:scale-[99%] hover:shadow-sm">
        <div
          style={{ backgroundImage: `url(/assets/${img})` }}
          className="h-full w-full rounded-[4px]"
        />
      </div>
    </Link>
  );
};

export default AlbumCover;
