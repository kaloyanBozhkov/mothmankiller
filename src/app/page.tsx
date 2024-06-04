import Center from "@/app/_components/layouts/Center.layour";
import Main from "./_components/templates/Main.template";
import Group from "./_components/layouts/Group.layout";
import AlbumDisc from "./_components/molecules/AlbumDisc.molecule";

export default async function Home() {
  return (
    <Main className="h-screen w-screen">
      <Center className="h-screen w-screen">
        <Group className="group" data-aos="fade-in">
          <AlbumDisc
            albumImg="cover1.jpeg"
            albumLink="https://open.spotify.com/album/2H2caUAqHgoiCzi22ShNIG?highlight=spotify:track:0T7b4zA5yoAvlJN4MaOh1Y"
          />
        </Group>
      </Center>
    </Main>
  );
}
