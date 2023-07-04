"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";

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

const SingleEvent = ({ data }: DataProps) => {
  const router = useParams();
  const [input, setInput] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!input.match(validRegex))
      setMessage({
        text: "Please introduce a correct email address.",
        type: "error",
      });

    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: input,
          eventId: router.id,
        }),
      });

      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const data = await response.json();

      setMessage({ text: data.message, type: data.type });
      setInput("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {data.event ? (
        <>
          <h1 className="capitalize mb-20 text-6xl font-extrabold text-center leading-none tracking-tight text-white">
            {data.event.title}
          </h1>
          <div className="w-4/5 mx-auto my-0">
            <div className="relative mb-8 w-full h-[22rem] md:h-[45rem]">
              <Image src={`${data.event.image}`} alt="" fill />
            </div>
            <p className="text-justify mb-4 text-xl font-normal text-gray-500">
              {data.event.description}
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <label className="mt-8 mb-4 text-lg font-extrabold uppercase">
                Register for the event!
              </label>
              <div>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="outline-none h-10 min-w-[25rem] shadow-none rounded-md border border-solid border-gray-200 text-base pl-2 text-black"
                  type="email"
                  id="email"
                  placeholder="Insert your email here"
                />
                <button
                  className="h-10 min-w-[10rem] rounded-md bg-gray-900 p-6 mx-4 align-middle inline-flex items-center justify-center text-base font-semibold uppercase cursor-pointer hover:bg-gray-300 hover:text-gray-900"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="mt-4">
              {message.type === "error" ? (
                <p className="text-red-600">{message.text}</p>
              ) : message.type === "success" ? (
                <p className="text-green-600">{message.text}</p>
              ) : (
                <p>{message.text}</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <h1 className="capitalize mb-20 text-6xl font-extrabold text-center leading-none tracking-tight text-white">
          No data for event received.
        </h1>
      )}
    </div>
  );
};

export default SingleEvent;
