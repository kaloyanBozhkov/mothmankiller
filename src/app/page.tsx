import HomeTemplate from "./_components/templates/Home.template";
import Albums from "./_components/organisms/Albums.organism";
import Stack from "./_components/layouts/Stack.layout";
import Group from "./_components/layouts/Group.layout";

import DrawerMenu from "./_components/organisms/DrawerMenu.organism";
import Events from "./_components/organisms/Events.organism";

export default async function Home() {
  return (
    <Stack className="bg-green-800">
      <Group className="w-full items-center justify-between p-4">
        <h1 className="font-rex-bold text-[30px] leading-[110%] text-white">
          Mothmankiller
        </h1>
        <DrawerMenu />
      </Group>
      <HomeTemplate
        albums={
          <div className="h-full w-full border-y-[1px] border-white">
            <Albums />
          </div>
        }
        main={
          <Stack className="gap-4 p-4">
            <Events />
          </Stack>
        }
      />
    </Stack>
  );
}
