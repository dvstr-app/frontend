"use client";
import { useState } from "react";
import { PlusIcon, StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconFill } from "@heroicons/react/24/solid";

const RatingStars = () => {
  const [activeScore, setActiveScore] = useState(0);
  const [finalScore, setFinalScore] = useState(0);

  const labels = ["Bad", "Questionable", "Okay", "Good", "Amazing"];

  return (
    <div className="flex">
      {[
        "text-red-500",
        "text-orange-500",
        "text-yellow-500",
        "text-lime-500",
        "text-green-500",
      ].map((variant, index) => (
        <span
          key={index}
          onClick={() => setFinalScore(index + 1)}
          onMouseEnter={() => setActiveScore(index + 1)}
          onMouseLeave={() => setActiveScore(0)}
          className="group relative cursor-pointer"
        >
          <span className="hidden absolute group-hover:block -bottom-10 left-2 w-fit px-2 py-1 rounded bg-black/75 z-10">
            {labels[index]}
          </span>
          {index < activeScore || index < finalScore ? (
            <StarIconFill className={`w-7 ${variant}`} />
          ) : (
            <StarIcon className={`w-7 ${variant}`} />
          )}
        </span>
      ))}
    </div>
  );
};
export default RatingStars;
