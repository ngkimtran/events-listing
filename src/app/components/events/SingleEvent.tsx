"use client";

import Image from "next/image";

type DataProps = {
  data: {
    event:
      | {
          id: string;
          title: string;
          city: string;
          description: string;
          image: string;
          emails_registered: string[];
        }
      | undefined;
  };
};

const SingleEvent = ({ data }: DataProps) => (
  <div>
    {data.event ? (
      <>
        <h1 className="capitalize mb-20 text-6xl font-extrabold text-center leading-none tracking-tight text-gray-900 text-white">
          {data.event.title}
        </h1>
        <div className="w-4/5 mx-auto my-0">
          <div className="relative w-full h-[22rem] md:h-[45rem]">
            <Image src={`${data.event.image}`} alt="" fill />
          </div>
          <p className="text-justify mb-4 text-xl font-normal text-gray-500 text-gray-400">
            {data.event.description}
          </p>
          <input type="email" /> <button>Submit</button>
        </div>
      </>
    ) : (
      <h1 className="capitalize mb-20 text-6xl font-extrabold text-center leading-none tracking-tight text-gray-900 text-white">
        No data for event received.
      </h1>
    )}
  </div>
);

export default SingleEvent;
