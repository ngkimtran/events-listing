import EventsPerCity from "@/app/components/events/EventsPerCity";

const getData = async (city: string) => {
  const { allEvents } = await import("../../../data/data.json");
  const decodedCity = decodeURIComponent(city);
  const allPaths = allEvents.filter((event) => event.city === decodedCity);

  return {
    paths: allPaths,
    fallback: false,
  };
};

const EventsPerCityPage = async ({ params }: { params: { city: string } }) => {
  const data = await getData(params.city);

  return <EventsPerCity city={params.city} data={data} />;
};

export default EventsPerCityPage;
