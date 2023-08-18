"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import RecipeInfo from "@/components/RecipeInfo";
import RecipeIngrediants from "@/components/RecipeIngrediants";
import ReactLoading from "react-loading";
import { addItemToFavourites } from "@/redux/recipeSlice";
import { useDispatch, useSelector } from "react-redux";

const page = ({ params }) => {
  const [itemAdded, setItemAdded] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const uri = params.recipe;
  const favourites = useSelector((state) => state.recipe.value.favourites);
  const dispatch = useDispatch();

  const addItem = () => {
    const newItem = {
      recipeName: recipeDetails.hits[0].recipe.label,
      cuisineType: recipeDetails.hits[0].recipe.cuisineType,
      mealType: recipeDetails.hits[0].recipe.mealType,
      image: recipeDetails.hits[0].recipe.image,
    };

    let isAlreadyAdded = false;

    favourites.forEach((item) => {
      if (item.recipeName === newItem.recipeName) {
        isAlreadyAdded = true;
      }
    });
    if (!isAlreadyAdded) {
      dispatch(addItemToFavourites(newItem));
      setItemAdded(true);
    }
    
  };

  async function getRecipeDetails() {
    try {
      const response = await axios.get(
        `https://api.edamam.com/api/recipes/v2/by-uri?type=public&uri=${uri}&app_id=7cb0f90c&app_key=f9cf83679243dd6c6836d40d160bbbd2`
      );
      setRecipeDetails(response.data);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getRecipeDetails();
  }, [uri]);

  return (
    <div>
      {loading ? (
        <div className="h-screen flex justify-center items-center bg-black">
          <ReactLoading
            type="bubbles"
            color="#ffffff"
            height={50}
            width={100}
          />
        </div>
      ) : (
        <>
          <Image
            src={
              recipeDetails.hits[0].recipe.images.LARGE
                ? recipeDetails.hits[0].recipe.images.LARGE.url
                : recipeDetails.hits[0].recipe.images.REGULAR.url
            }
            alt="banner"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute w-full h-full bg-gradient-to-t from-black"></div>
          <div className="relative h-screen flex flex-col justify-center items-center pt-40 zxl:pt-20">
            <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-5 px-5 md:px-0">
              {recipeDetails.hits[0].recipe.label}
            </h1>

            {itemAdded ? (
              <button className="button">
                Added to favorites
                <FontAwesomeIcon icon={faCheck} className="ml-2" />
              </button>
            ) : (
              <button
                className="button"
                onClick={addItem}
              >
                Add to favorites
                <FontAwesomeIcon icon={faPlus} className="ml-2" />
              </button>
            )}
          </div>
          <div className="h-full bg-black">
            {recipeDetails ? (
              <>
                <RecipeInfo recipeDetails={recipeDetails} />
                <RecipeIngrediants recipeDetails={recipeDetails} />
              </>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

export default page;
