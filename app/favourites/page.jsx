"use client";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useSelector } from "react-redux";

const Favourites = () => {
  const favourites = useSelector((state) => state.recipe.value.favourites);

  return (
    <div className="h-screen flex justify-center items-center">
      <SignedOut>
        <h1>Sign in to add recipes to favourites</h1>
      </SignedOut>
      <SignedIn>
        {favourites.length > 0 ? (
          favourites.map((favourite, index) => (
            <h1 key={index}>{favourite.recipeName}</h1>
          ))
        ) : (
          <h1 className="text-black">Nothing to show</h1>
        )}
      </SignedIn>
    </div>
  );
};

export default Favourites;
