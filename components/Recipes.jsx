"use client";
import SearchResults from "./searchResults";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Recipes = ({ recipes }) => {
  const searchTerm = useSelector((state) => state.recipe.value.searchTerm);
  const router = useRouter();
  return (
    <div className="flex flex-wrap justify-center py-10">
      {recipes && recipes.hits.length > 0 ? (
        recipes.hits.map((recipe) => (
          <div
            className="md:mr-[3rem] w-full md:w-auto mb-10"
            key={recipe.recipe.uri}
          >
            {recipe.recipe.label
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) && (
              <div
              className="hover:cursor-pointer"
                onClick={() =>
                  router.push(
                    `/recipeDetails/${encodeURIComponent(recipe.recipe.uri)}`
                  )
                }
              >
                <SearchResults recipe={recipe} />
              </div>
            )}
          </div>
        ))
      ) : (
        <h1 className="text-white text-3xl">No results found</h1>
      )}
    </div>
  );
};

export default Recipes;
