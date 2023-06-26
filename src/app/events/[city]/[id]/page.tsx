import Image from "next/image";

const getData = async (id: string) => {
  const { allEvents } = await import("../../../../data/data.json");
  const singleEvent = allEvents.find((event) => event.id === id);

  return {
    event: singleEvent,
  };
};

const SingleEventPage = async ({
  params,
}: {
  params: { city: string; id: string };
}) => {
  const data = await getData(params.id);

  return (
    <>
      {data.event ? (
        <>
          <h1 className="capitalize mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            {data.event.title}
          </h1>
          <Image src={`${data.event.image}`} alt="" width={200} height={200} />
          <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
            {data.event.description}
          </p>
        </>
      ) : (
        <h1 className="capitalize mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          No data for event received.
        </h1>
      )}
    </>
  );
};

export default SingleEventPage;
