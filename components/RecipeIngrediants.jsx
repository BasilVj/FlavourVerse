import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack, faCheck } from "@fortawesome/free-solid-svg-icons";

const RecipeIngrediants = ({ recipeDetails }) => {
  return (
    <div className="h-full mt-20 md:px-[6rem] px-5 w-full">
      {recipeDetails && (
        <>
          <div>
            <h1 className="text-green-700 text-2xl underline pb-4">
              Ingredients
            </h1>
            {recipeDetails.hits[0].recipe.ingredientLines.map(
              (ingredient, index) => (
                <div key={index} className="flex gap-2 py-2 items-center">
                  <FontAwesomeIcon
                    icon={faThumbtack}
                    className="text-green-700  rotate-45"
                  />
                  <p className="text-white">{ingredient}</p>
                </div>
              )
            )}
          </div>
          <div className="py-[4rem]">
            <h1 className="text-green-700 text-2xl underline pb-4">
              Health Labels
            </h1>
            <div className="flex w-full lg:w-[60%] flex-wrap gap-4">
              {recipeDetails.hits[0].recipe.healthLabels.map(
                (healthLabel, index) => (
                  <div
                    key={index}
                    className="text-white flex gap-2 bg-[#fff5f518] px-4 py-1 rounded-full items-center"
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-700"
                    />
                    <p className="">{healthLabel}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RecipeIngrediants;
