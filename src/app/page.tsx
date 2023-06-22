import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="">
        <Image src="" alt="" />
        <h2 className="text-3xl font-extrabold dark:text-white">
          Events in London
        </h2>
        <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          quisquam est fuga! Tempore nam totam voluptatum assumenda,
          reprehenderit quo deserunt inventore cum rem fugiat libero consectetur
          quae minima nobis dolore!
        </p>
      </Link>

      <Link href="">
        <Image src="" alt="" />
        <h2 className="text-3xl font-extrabold dark:text-white">
          Events in San Francisco
        </h2>
        <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          quisquam est fuga! Tempore nam totam voluptatum assumenda,
          reprehenderit quo deserunt inventore cum rem fugiat libero consectetur
          quae minima nobis dolore!
        </p>
      </Link>

      <Link href="">
        <Image src="" alt="" />
        <h2 className="text-3xl font-extrabold dark:text-white">
          Events in Barcelona
        </h2>
        <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          quisquam est fuga! Tempore nam totam voluptatum assumenda,
          reprehenderit quo deserunt inventore cum rem fugiat libero consectetur
          quae minima nobis dolore!
        </p>
      </Link>
    </>
  );
}
