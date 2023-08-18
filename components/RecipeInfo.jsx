import React from "react";

const RecipeInfo = ({ recipeDetails }) => {
  return (
    <div className="text-white flex justify-center">
      {recipeDetails && (
        <>
          <div className="m:mr-10 mr-5">
            <button
              className="text-white text-center border border-gray-500 py-1.5 
            px-3 rounded-full mb-2"
            >
              {parseFloat(recipeDetails.hits[0].recipe.calories).toFixed(2)}
            </button>
            <p className="text-neutral-100 text-[12px] md:text-md text-center">
              CALORIES
            </p>
          </div>
          <div className="md:mr-10 mr-5">
            <button
              className="text-white text-center border border-gray-500 py-1.5
             px-7 rounded-full mb-2"
            >
              {recipeDetails.hits[0].recipe.totalTime}
            </button>
            <p className="text-neutral-100 text-[12px] md:text-md text-center">
              TOTAL TIME
            </p>
          </div>
          <div>
            <button className="text-white text-center border border-gray-500 py-1.5 px-7 rounded-full mb-2">
              {recipeDetails.hits[0].recipe.yield}
            </button>
            <p className="text-neutral-100 text-[12px] md:text-md text-center">
              SERVINGS
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeInfo;
