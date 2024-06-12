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
import Group from "../layouts/Group.layout";
import { Fragment } from "react";

const Events = () => {
  const { upcoming, past } = categorizeAndSortEvents(EVENTS);
  return (
    <Stack className="items-center gap-4">
      <h2 className="font-rex-bold text-[22px] leading-[100%] text-white">
        - Our Events -
      </h2>
      <Tabs
        defaultValue={upcoming.length === 0 ? "past" : "upcoming"}
        className="flex w-[420px] max-w-full flex-col gap-4"
      >
        <TabsList className="bg-transparent">
          <TabsTrigger value="upcoming" asChild>
            <Center className="cursor-pointer text-[24px]">
              <h2 className="font-rex-bold leading-[24px]">Upcoming</h2>
            </Center>
          </TabsTrigger>
          <TabsTrigger value="past" asChild>
            <Center className="cursor-pointer text-[24px]">
              <h2 className="font-rex-bold leading-[24px]">Previous</h2>
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
          <Stack className="gap-6">
            <EventsList events={past} isPast />
          </Stack>
        </TabsContent>
      </Tabs>
    </Stack>
  );
};

export default Events;

type Event = (typeof EVENTS)[0];

interface CategorizedEvents {
  upcoming: Event[];
  past: Event[];
}

function categorizeAndSortEvents(events: Event[]): CategorizedEvents {
  const parseEventDateTime = (event: Event): Date => {
    const dateStr = event.date;
    const timeStr = event.time;

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

const EventsList = ({
  events,
  isPast = false,
}: {
  events: Event[];
  isPast?: boolean;
}) =>
  events.map((event, index) => (
    <Card key={index} className="bg-white">
      <CardHeader>
        <CardTitle className="break-words">{event.title}</CardTitle>
        <CardDescription>
          {event.description.split("\n").map((e, idx) => (
            <Fragment key={idx}>
              {e}
              <br />
            </Fragment>
          ))}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={event.link} target="_blank">
          <div className="shadow-md">
            <div className="overflow-hidden rounded-md [&:hover_img]:scale-[1.05]">
              {/* eslint-disable-next-line */}
              <img
                src={event.cover}
                className="h-auto w-full transition-all"
                alt="Cover"
              />
            </div>
          </div>
        </Link>
      </CardContent>
      <CardFooter>
        <Group className="w-full items-center justify-between">
          {isPast ? null : (
            <p className="font-rex-bold text-[24px]">{event.price}</p>
          )}
          {event.drivePhotos && event.drivePhotos !== "-" ? (
            <Link
              href={event.drivePhotos as string}
              target="_blank"
              className="flex-1"
            >
              <Button className="w-full">View Photos</Button>
            </Link>
          ) : (
            <Link href={event.link} target="_blank">
              <Button>View Event</Button>
            </Link>
          )}
        </Group>
      </CardFooter>
    </Card>
  ));
