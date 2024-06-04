import { twMerge } from "tailwind-merge";
import AlbumCover from "../atoms/AlbumCover.atom";
import Disc from "../atoms/Disc.atom";
import Image from "next/image";

const AlbumDisc = ({
  className = "",
  albumImg,
  albumLink,
}: {
  className?: string;
  albumImg: string;
  albumLink: string;
}) => {
  return (
    <div className={twMerge("relative", className)}>
      <AlbumCover link={albumLink} img={albumImg} className="z-10" />
      <div className="absolute inset-0 -z-10 transition-all duration-[0.5s] ease-in-out group-hover:translate-x-[40%] group-hover:duration-[1s]">
        <Disc coverImgSrc={`/assets/${albumImg}`} />
      </div>
    </div>
  );
};

export default AlbumDisc;
