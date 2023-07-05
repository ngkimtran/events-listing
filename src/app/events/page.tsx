import Events from "../components/events/Events";

const getData = async () => {
  const { events_categories } = await import("../../data/tmp/data.json");

  return {
    events_categories,
  };
};

const EventsPage = async () => {
  const data = await getData();

  return <Events data={data} />;
};

export default EventsPage;
