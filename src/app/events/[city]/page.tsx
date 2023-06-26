import Image from "next/image";
import Link from "next/link";

const getData = async (city: string) => {
  const { allEvents } = await import("../../../data/data.json");
  const allPaths = allEvents.filter((event) => event.city === city);

  return {
    paths: allPaths,
    fallback: false,
  };
};

const EventsPerCityPage = async ({ params }: { params: { city: string } }) => {
  const data = await getData(params.city);

  return (
    <>
      <h1 className="capitalize mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Events In {params.city}
      </h1>
      {data.paths.map((path) => (
        <Link key={path.id} href={`/events/${path.city}/${path.id}`} passHref>
          <Image src={`${path.image}`} alt="" width={200} height={200} />
          <h2 className="text-3xl font-extrabold dark:text-white">
            {path.title}
          </h2>
          <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
            {path.description}
          </p>
        </Link>
      ))}
    </>
  );
};

export default EventsPerCityPage;
