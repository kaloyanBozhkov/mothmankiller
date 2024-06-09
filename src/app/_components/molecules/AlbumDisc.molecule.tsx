"use client";

import { twMerge } from "tailwind-merge";
import AlbumCover from "../atoms/AlbumCover.atom";
import Disc from "../atoms/Disc.atom";
import { useEffect, useRef, useState } from "react";

const AlbumDisc = ({
  className = "",
  albumImg,
  albumLink,
  onlyDisc = false,
  initialOpened = false,
}: {
  className?: string;
  albumImg: string;
  albumLink: string;
  initialOpened?: boolean;
  onlyDisc?: boolean;
}) => {
  const [opened, setOpened] = useState(initialOpened);
  const clicked = useRef(false);

  useEffect(() => {
    if (!opened || !clicked.current) return;
    const id = setTimeout(() => {
      window.open(albumLink, "_blank");
      setOpened(false);
    }, 800);
    clicked.current = false;
    return () => clearTimeout(id);
  });

  return (
    <div
      className={twMerge("relative cursor-pointer", className)}
      onClick={() => {
        clicked.current = true;
        setOpened(true);
      }}
    >
      {onlyDisc ? (
        <div className="h-[200px] w-[200px] hover:scale-[99%] sm:h-[300px] sm:w-[300px]" />
      ) : (
        <AlbumCover img={albumImg} className="z-10" />
      )}
      <div
        className={twMerge(
          "group-hover: absolute inset-0 -z-10 transition-all ease-in-out",
          opened ? "translate-x-[40%] duration-1000" : "duration-500",
        )}
      >
        <Disc coverImgSrc={`/assets/${albumImg}`} />
      </div>
    </div>
  );
};

export default AlbumDisc;
