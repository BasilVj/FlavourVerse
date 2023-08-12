"use client"
import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import Recipes from "./Recipes";

const SearchRecipe = () => {
  const [recipes, setRecipes] = useState(null);
  const searchTerm = useSelector((state) => state.recipe.value.searchTerm);

  async function getRecipe() {
    const response = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=7cb0f90c&app_key=f9cf83679243dd6c6836d40d160bbbd2`
    );
    setRecipes(response.data);
  }

  useEffect(() => {
    getRecipe();
  }, [searchTerm]);

  return (
    <div className="bg-black px-5 py-[5rem]" id="explore">
      <SearchBar />
      <div className="flex justify-center w-full">
        {recipes ? (
          <Recipes recipes={recipes} />
        ) : (
          <ReactLoading
            type="bubbles"
            color="#ffffff"
            height={50}
            width={100}
          />
        )}
      </div>
    </div>
  );
};

export default SearchRecipe;
