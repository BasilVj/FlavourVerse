"use client";
import React from "react";

const SearchResults = ({ recipe }) => {
  return (
    <div className="bg_gradient shadow rounded-lg w-full  md:w-[225px] ">
      <div className="w-full h-[170px] ">
        <img
          src={recipe.recipe.image}
          alt="recipe"
          className="w-full h-full rounded-lg"
        />
      </div>

      <div className="px-3 pt-3 pb-2 h-full">
        <p className="text-white font-semibold">{recipe.recipe.label}</p>
      </div>
      <div className="flex px-3 pb-3 h-full">
        <div className="w-[110px]  py-1.5">
          <p className="text-center text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500">
            {recipe.recipe.cuisineType}
          </p>
        </div>
        <div className="w-[100px] py-1.5">
          <p className="text-center text-[12px] bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500">
            {recipe.recipe.mealType}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
