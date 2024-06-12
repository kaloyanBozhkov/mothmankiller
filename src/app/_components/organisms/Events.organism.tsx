import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/_components/shadcn/Tabs.shadcn";
import Center from "../layouts/Center.layour";
import Stack from "../layouts/Stack.layout";

import EVENTS from "@/automated/events.json";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/_components/shadcn/Card.shadcn";
import { Button } from "../shadcn/Button.shadcn";
import Link from "next/link";
import Image from "next/image";
import Group from "../layouts/Group.layout";

const Events = () => {
  const { upcoming, past } = categorizeAndSortEvents(EVENTS);
  return (
    <Stack className="items-center gap-4">
      <h2 className="font-rex-bold text-[22px] leading-[100%] text-white">
        - Our Events -
      </h2>
      <Tabs
        defaultValue={upcoming.length === 0 ? "past" : "upcoming"}
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
          {upcoming.length === 0 ? (
            <p className="text-center font-rex-bold text-[18px] leading-[110%] text-white">
              No upcomng events, come back later.
            </p>
          ) : (
            <EventsList events={upcoming} />
          )}
        </TabsContent>
        <TabsContent value="past">
          <Stack className="gap-4">
            <EventsList events={past} />
          </Stack>
        </TabsContent>
      </Tabs>
    </Stack>
  );
};

export default Events;

interface Event {
  date: string;
  time: string;
  title: string;
  description: string;
  location: string;
  cover: string;
  link: string;
}

interface CategorizedEvents {
  upcoming: Event[];
  past: Event[];
}

function categorizeAndSortEvents(events: Event[]): CategorizedEvents {
  const parseEventDateTime = (event: Event): Date => {
    const dateStr = event.date;
    const timeStr = event.time;

    const is12HourFormat = timeStr.includes("AM") || timeStr.includes("PM");
    const dtFormat = is12HourFormat ? "dd/MM/yyyy hh.mma" : "dd/MM/yyyy HH.mm";

    return new Date(
      dateStr.split("/").reverse().join("-") +
        "T" +
        timeStr.replace(".", ":").replace("AM", " AM").replace("PM", " PM"),
    );
  };

  const now = new Date();

  const upcomingEvents: Event[] = [];
  const pastEvents: Event[] = [];

  for (const event of events) {
    const eventDateTime = parseEventDateTime(event);
    if (eventDateTime > now) {
      upcomingEvents.push(event);
    } else {
      pastEvents.push(event);
    }
  }

  const sortEventsByDateDesc = (a: Event, b: Event): number => {
    return parseEventDateTime(b).getTime() - parseEventDateTime(a).getTime();
  };

  upcomingEvents.sort(sortEventsByDateDesc);
  pastEvents.sort(sortEventsByDateDesc);

  return {
    upcoming: upcomingEvents,
    past: pastEvents,
  };
}

const EventsList = ({ events }: { events: Event[] }) =>
  events.map((event, index) => (
    <Card key={index} className="bg-white">
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>{event.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>content</p>
        <img
          src={event.cover}
          className="h-auto w-full rounded-md"
          alt="Cover"
        />
      </CardContent>
      <CardFooter>
        <Group>
          <p>{event.location}</p>
          <Link href={event.link} target="_blank">
            <Button>View Event</Button>
          </Link>
        </Group>
      </CardFooter>
    </Card>
  ));
