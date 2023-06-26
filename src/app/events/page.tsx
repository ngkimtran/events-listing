import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const { events_categories } = await import("../../data/data.json");

  return {
    events_categories,
  };
};

const EventsPage = async () => {
  const data = await getData();

  return (
    <>
      <h1 className="mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Events
      </h1>
      <div>
        {data.events_categories.map((event) => (
          <Link key={event.id} href={`/events/${event.id}`} passHref>
            <Image src={event.image} alt="" width={200} height={200} />
            <h2 className="text-3xl font-extrabold dark:text-white">
              {event.title}
            </h2>
            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
              {event.description}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default EventsPage;
