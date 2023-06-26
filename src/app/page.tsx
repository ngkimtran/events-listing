import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const { events_categories } = await import("../data/data.json");

  return {
    events_categories,
  };
};

const Home = async () => {
  const data = await getData();

  return (
    <>
      {data.events_categories.map((event) => (
        <Link href={`/events/${event.id}`} key={event.id} passHref>
          <Image src={event.image} alt="" width={200} height={200} />
          <h2 className="text-3xl font-extrabold dark:text-white">
            {event.title}
          </h2>
          <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
            {event.description}
          </p>
        </Link>
      ))}
    </>
  );
};

export default Home;
