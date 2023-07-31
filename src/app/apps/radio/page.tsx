import Link from "next/link";
import React from "react";

const RadioIndex = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <p className="text-3xl md:text-4xl font-semibold mb-4 text-center">
        Welcome to Devster Radio!
      </p>
      <Link
        href="/apps/radio/player"
        className="w-96 p-4 border border-green-500 rounded shadow text-center text-lg hover:bg-green-500 hover:text-white duration-150 hover:shadow-lg"
      >
        Start using the player
      </Link>
      <div className="relative flex flex-col items-center gap-8">
        <p className="z-10 absolute flex w-full h-full items-center justify-center text-2xl font-semibold select-none">
          Coming soon!
        </p>
        <div className="flex flex-col gap-8 blur-[2px] p-8 rounded border shadow-lg">
          <Link
            href="/create"
            className="w-96 p-4 border border-green-500 rounded shadow text-center text-lg hover:bg-green-500 hover:text-white duration-150 hover:shadow-lg"
          >
            Create a new room
          </Link>
          <Link
            href="/join"
            className="w-96 p-4 border border-blue-500 rounded shadow text-center text-lg hover:bg-blue-500 hover:text-white duration-150 hover:shadow-lg"
          >
            Join with a code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RadioIndex;
