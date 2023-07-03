import SingleEvent from "@/app/components/events/SingleEvent";

const getData = async (id: string) => {
  const { allEvents } = await import("../../../../data/data.json");
  const decodedId = decodeURIComponent(id);
  const singleEvent = allEvents.find((event) => event.id === decodedId);

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

  return <SingleEvent data={data} />;
};

export default SingleEventPage;
