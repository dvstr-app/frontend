"use client";
import React, { useEffect, useState } from "react";

import Button from "@/components/Buttons/Button";
import RatingStars from "./RatingStars";
import { useRouter } from "next/navigation";
import FlatRecipeCard from "@/components/recipes/FlatRecipeCard";
import RecipeCard from "@/components/recipes/RecipeCard";
import { Recipe } from "@/components/recipes/types";
import ScheduleToday from "@/components/recipes/Schedule/ScheduleToday";

// const recipes = [
//   {
//     id: 31,
//     title:
//       "Recipe 1 rambling bout some stuff idk just need the text hahaha pleases okay lol",
//     steps: "make some stuff",
//     ingredients: [
//       { title: "ing1", unit: "g.", quantity: 15.2 },
//       { title: "ing2", unit: "g.", quantity: 10.0 },
//     ],
//   },
//   {
//     id: 32,
//     title:
//       "Recipe 2 rambling bout some stuff idk just need the text hahaha pleases okay lol",
//     steps: "make some stuff",
//     ingredients: [
//       { title: "ing1", unit: "g.", quantity: 15.2 },
//       { title: "ing2", unit: "g.", quantity: 10.0 },
//     ],
//   },
//   {
//     id: 33,
//     title:
//       "Recipe 3 rambling bout some stuff idk just need the text hahaha pleases okay lol",
//     steps: "make some stuff",
//     ingredients: [
//       { title: "ing1", unit: "g.", quantity: 15.2 },
//       { title: "ing2", unit: "g.", quantity: 10.0 },
//     ],
//   },
//   {
//     id: 34,
//     title: "Recipe 4",
//     steps: "make some stuff",
//     ingredients: [
//       { title: "ing1", unit: "g.", quantity: 15.2 },
//       { title: "ing2", unit: "g.", quantity: 10.0 },
//     ],
//   },
// ];

const RecipeAppPage = () => {
  const router = useRouter();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  //   const recipes = await getRecipes();

  const copyToClipboard = async () => {
    console.log(navigator);
    if (navigator.platform === "iPhone") {
      return router.push(
        `shortcuts://run-shortcut?name=Create%20Shopping%20List`
      );
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="w-full h-full flex justify-center mt-12">
      <div className="w-full 2xl:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row-dense gap-8">
        {/*  */}
        {/* <div className="col-span-3 h-96 flex items-center gap-8 bborder rrounded pp-8 jjustify-center"> */}
        {/*  */}
        <div className="col-span-1 h-96 flex flex-col gap-2 border rounded px-4 py-4">
          <ScheduleToday />
        </div>
        {/*  */}
        <div className="col-span-1 h-96 flex flex-col border rounded p-4">
          <div className="flex justify-between items-center">
            <p className="text-xl font-medium w-full">Shopping list</p>
            <p
              className="text-sm font-medium p-2 text-blue-500 hover:text-white hover:bg-blue-500 rounded hover:shadow cursor-pointer duration-150"
              onClick={copyToClipboard}
            >
              Copy
            </p>
          </div>
          <div className="list-disc">
            <p>Chicken - 400g.</p>
            <p>Tomatoes - 150g.</p>
            <p>Onions - 50g.</p>
          </div>
        </div>
        {/*  */}
        <div className="col-span-1 min-w-fit h-96 flex flex-col gap-2 border rounded p-4">
          <p className="text-xl font-medium w-full">How was your meal?</p>
          <RecipeCard recipe={recipes[0]} className="w-fit">
            <div className="flex flex-col gap-2 w-full">
              {["Difficulty", "Taste", "Do again?"].map((rubric) => (
                <div
                  key={rubric}
                  className="title text-lg font-medium flex justify-between"
                >
                  <p>{rubric}</p>
                  <RatingStars />
                </div>
              ))}
              <Button>
                <p className="py-1 px-2 flex gap-1 items-center">
                  Didn't Do It
                </p>
              </Button>
            </div>
          </RecipeCard>
        </div>

        {/* </div> */}

        {/*<div className="col-span-1 h-96 border rounded p-4">
          <p>Stats:</p>
          <p>Carbs</p>
          <p>Fats</p>
          <p>callories</p>
          <p>CO2</p>
        </div> */}
      </div>
    </div>
  );
};

export default RecipeAppPage;
