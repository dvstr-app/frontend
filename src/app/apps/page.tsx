"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsInfoSquare } from "react-icons/bs";
import useFetch from "@/lib/hooks/useFetch";
import { API_URL } from "@/lib/const";

type App = {
  id: number;
  name: string;
  description: string;
  url: string;
  thumbnail: string;
};

const AppCard = ({ app }: { app: App }) => {
  const [flipped, setFlipped] = useState<boolean>(false);

  return (
    <div className="relative aspect-square border rounded-lg shadow-md cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 dark:hover:border-blue-400 hoverr:-translate-y-1 duration-150 flex items-center">
      <button
        className="z-10 absolute top-4 right-4 w-7 h-7 "
        onClick={() => {
          setFlipped(!flipped);
        }}
      >
        <BsInfoSquare className="w-full h-full" />
      </button>
      <Link href={app.url} className="relative w-full h-full rounded-l-lg">
        <div
          className={`p-2 absolute top-0 left-0 w-full h-full flex items-center justify-center duration-200   ${
            flipped ? "flip" : ""
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {flipped ? (
            <p
              className="tracking-tight p-2 rounded bg-zinc-800/50"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            >
              {app.description}
            </p>
          ) : (
            <p className="text-2xl font-bold text-center p-2 rounded bg-zinc-800/50">
              {app.name}
            </p>
          )}
        </div>
        <div className="rounded-l-lg">
          <Image
            loader={({ src, width, quality }) => {
              return src;
              return `${API_URL}${src}`;
            }}
            src={app.thumbnail}
            alt={`${app.name} thumbnail`}
            style={{ objectFit: "fill" }}
            fill
            className="p-1 rounded-l-lg blur-sm -z-10"
            // objectFit="cover"
          />
        </div>
        {/* <div className="p-4 w-full h-full flex flex-col items-center justify-start gap-2">
        <p className="text-xl font-semibold text-center">{app.name}</p>
        <p className="tracking-tight">{app.description}</p>
      </div> */}
      </Link>
    </div>
  );
};

const AppsIndex = () => {
  const { _fetch } = useFetch();
  const [apps, setApps] = useState<App[]>([]);
  useEffect(() => {
    _fetch("/api/apps/", {})
      .then((data) => {
        setApps(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="mt-12 w-full flex justify-center">
      <div className="w-full xl:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-cols-fr auto-rows-fr">
        {apps.map((app: App) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
};

export default AppsIndex;
