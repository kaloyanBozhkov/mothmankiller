import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/shadcn/Tabs.shadcn";
import Center from "../layouts/Center.layour";
import Stack from "../layouts/Stack.layout";

const Events = () => {
  return (
    <Stack className="items-center gap-4">
      <h2 className="font-rex-bold text-[22px] leading-[100%] text-white">
        - Our Events -
      </h2>
      <Tabs
        defaultValue="upcoming"
        className="flex w-[400px] max-w-full flex-col gap-4"
      >
        <TabsList className="bg-transparent">
          <TabsTrigger value="upcoming" asChild>
            <Center className="cursor-pointer text-[24px]">
              <h2 className="font-rex-bold  leading-[24px]">Upcoming</h2>
            </Center>
          </TabsTrigger>
          <TabsTrigger value="past" asChild>
            <Center className="cursor-pointer text-[24px]">
              <h2 className="font-rex-bold  leading-[24px]">Previous</h2>
            </Center>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <p className="font-rex-bold text-center text-[18px] leading-[110%] text-white">
            No upcomng events, come back later.
            <br />
            Coming soon..
          </p>
        </TabsContent>
        <TabsContent value="past">
          <p className="font-rex-bold text-center text-[18px] leading-[110%] text-white">
            Past events & their photos here.
            <br />
            Coming soon..
          </p>
        </TabsContent>
      </Tabs>
    </Stack>
  );
};

export default Events;
