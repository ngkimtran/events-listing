"use client";

import Image from "next/image";
import Link from "next/link";

type DataProps = {
  city: string;
  data: {
    paths: {
      id: string;
      title: string;
      city: string;
      description: string;
      image: string;
      emails_registered: string[];
    }[];
  };
};

const EventsPerCity = ({ city, data }: DataProps) => (
  <>
    <h1 className="capitalize mb-20 text-6xl font-extrabold text-center leading-none tracking-tight text-gray-900 text-white">
      Events In {city.replace(/[-]/gi, " ")}
    </h1>
    <div className="flex flex-row flex-wrap w-full gap-8 mr-0 justify-center">
      {data.paths.map((path) => (
        <Link
          className="flex flex-col w-full md:w-[30%] "
          key={path.id}
          href={`/events/${path.city}/${path.id}`}
          passHref
        >
          <div className="relative w-full h-[30rem] md:h-[24rem] ">
            <Image src={`${path.image}`} alt="" fill />
          </div>
          <h2 className="text-2xl font-extrabold text-white">{path.title}</h2>
          <p className="mb-4 text-lg font-normal text-gray-500 text-gray-400">
            {path.description}
          </p>
        </Link>
      ))}
    </div>
  </>
);

export default EventsPerCity;
