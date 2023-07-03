"use client";

import Link from "next/link";
import Image from "next/image";

const Header = () => (
  <header className="border-gray-200 bg-gray-900 p-4">
    <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
      <Link href="/" className="flex items-center" passHref>
        <Image
          src="/favicon.ico"
          width="50"
          height="50"
          className="h-20 w-20 mr-3"
          alt="Logo"
        />
        <span className="self-center text-2xl md:text-3xl font-semibold whitespace-nowrap text-white">
          Events Listing
        </span>
      </Link>
      <nav>
        <ul className="font-medium flex flex-row mt-0 border-0 text-lg md:text-xl md:p-4 md:space-x-8">
          <li>
            <Link
              href="/"
              className="mx-1 p-2 md:px-5 text-gray-900 rounded text-white hover:bg-gray-700 hover:text-white"
              passHref
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="mx-1 p-2 md:px-5 text-gray-900 rounded text-white hover:bg-gray-700 hover:text-white"
              passHref
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/events"
              className="mx-1 p-2 md:px-5 text-gray-900 rounded text-white hover:bg-gray-700 hover:text-white"
              passHref
            >
              Events
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
