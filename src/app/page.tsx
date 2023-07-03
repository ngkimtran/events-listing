import Home from "./components/home/Home";

const getData = async () => {
  const { events_categories } = await import("../data/data.json");

  return {
    events_categories,
  };
};

const HomePage = async () => {
  const data = await getData();

  return <Home data={data} />;
};

export default HomePage;
