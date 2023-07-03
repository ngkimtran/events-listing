"use client";

import Link from "next/link";
import Image from "next/image";

type DataProps = {
  data: {
    events_categories: {
      id: string;
      title: string;
      description: string;
      image: string;
    }[];
  };
};

const Home = ({ data }: DataProps) => (
  <>
    <div className="capitalize mb-20 text-6xl font-extrabold text-center leading-none tracking-tight text-gray-900 text-white">
      Events around the world
    </div>
    <div className="flex flex-col gap-16">
      {data.events_categories.map((event) => (
        <Link
          className="flex flex-row gap-8 justify-center items-center even:flex-row-reverse"
          href={`/events/${event.id}`}
          key={event.id}
          passHref
        >
          <div className="relative w-2/5 h-[22rem] md:h-[45rem]">
            <Image src={event.image} alt="" fill />
          </div>
          <div className="w-1/2">
            <h2 className="text-3xl font-extrabold text-white pb-4">
              {event.title}
            </h2>
            <p className="text-justify mb-4 text-lg font-normal text-gray-500 text-gray-400">
              {event.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </>
);

export default Home;
