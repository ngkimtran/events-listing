import EventsPerCity from "@/app/components/events/EventsPerCity";

const getData = async (city: string) => {
  const { all_events } = await import("../../../data/data.json");
  const decodedCity = decodeURIComponent(city);
  const allPaths = all_events.filter((event) => event.city === decodedCity);

  return {
    paths: allPaths,
  };
};

const EventsPerCityPage = async ({ params }: { params: { city: string } }) => {
  const data = await getData(params.city);

  return <EventsPerCity city={params.city} data={data} />;
};

export default EventsPerCityPage;
