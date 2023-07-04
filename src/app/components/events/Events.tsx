"use client";

import Image from "next/image";
import Link from "next/link";

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

const Events = ({ data }: DataProps) => (
  <>
    <h1 className="capitalize mb-20 text-6xl font-extrabold text-center leading-none tracking-tight text-white">
      Events
    </h1>
    <div className={`grid md:grid-cols-3 grid-rows-1 gap-5`}>
      {data.events_categories.map((event) => (
        <Link
          className="relative w-full h-[38rem] md:h-[45rem]"
          key={event.id}
          href={`/events/${event.id}`}
          passHref
        >
          <Image src={event.image} alt="" fill />
          <h2 className="w-full text-4xl font-extrabold text-white absolute top-1/2 text-center uppercase drop-shadow-[1px_1px_20px_rgba(0,0,0,1)]">
            {event.title}
          </h2>
        </Link>
      ))}
    </div>
  </>
);

export default Events;
