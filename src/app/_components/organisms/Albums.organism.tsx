"use client";
import { useEffect, useState } from "react";
import Center from "../layouts/Center.layour";
import AlbumDisc from "../molecules/AlbumDisc.molecule";
import Main from "../templates/Main.template";
import { twMerge } from "tailwind-merge";
import useSlideEvents from "@/app/hooks/useSlideEvents";
import Stack from "../layouts/Stack.layout";
import Group from "../layouts/Group.layout";
import SlideDots from "../atoms/SlideDots.atom";
import Disc from "../atoms/Disc.atom";

const Albums = ({ className }: { className?: string }) => {
  const [active, setActive] = useState(0);
  const wrapperRef = useSlideEvents<HTMLDivElement>({
    onSlideRight: () => {
      setActive((prev) => (prev === 0 ? 0 : prev - 1));
    },
    onSlideLeft: () => {
      setActive((prev) =>
        prev === ALBUMS.length - 1 ? ALBUMS.length - 1 : prev + 1,
      );
    },
  });

  return (
    <div
      ref={wrapperRef}
      className={twMerge("relative h-full overflow-visible", className)}
    >
      <div
        className="relative flex h-full w-full flex-row transition-all duration-500 ease-out [&>div]:shrink-0"
        style={{
          transform: `translateX(-${active * 100}%)`,
        }}
      >
        {ALBUMS.map(({ name, link, cover, type }, idx) => (
          <Main
            className="relative h-full w-full"
            bgImage={`/assets/${cover}`}
            key={idx}
          >
            <Center className="h-full w-full pb-[20px]">
              <Stack className="gap-4">
                <Stack className="gap-0">
                  <p className="font-rex-bold text-[16px] text-white">{type}</p>
                  <h1 className="font-rex-bold text-[30px] leading-[110%] text-white">
                    {name}
                  </h1>
                </Stack>
                <AlbumDisc
                  albumImg={cover}
                  albumLink={link}
                  className="animate-breathe"
                  onlyDisc={type === "Single"}
                />
              </Stack>
            </Center>
          </Main>
        ))}
      </div>
      <SlideDots
        count={ALBUMS.length}
        active={active}
        onClick={setActive}
        className="absolute bottom-[20px] left-0 right-0 "
      />
    </div>
  );
};

export default Albums;

const ALBUMS = [
  {
    name: "Понятия",
    cover: "cover1.jpeg",
    link: "https://open.spotify.com/album/2H2caUAqHgoiCzi22ShNIG?highlight=spotify:track:0T7b4zA5yoAvlJN4MaOh1Y",
    type: "Album",
  },
  {
    name: "The Flow",
    link: "https://open.spotify.com/album/34ffVG0hNZ5hwwKR1AW9Wd",
    cover: "flow.jpeg",
    type: "Album",
  },
  {
    name: "Кал",
    link: "https://open.spotify.com/track/0zM04bFPr8iOLPcc65wUPx",
    cover: "cover3.jpeg",
    type: "Single",
  },
];
