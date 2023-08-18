"use client";
import Favourite from "@/components/Favourite";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useSelector } from "react-redux";

const Page = () => {
  const favourites = useSelector((state) => state.recipe.value.favourites);
  return (
    <div className="bg-black px-5 py-[5rem] flex justify-center w-full">
      <SignedOut>
        <div className="h-[40vh] flex justify-center items-center ">
          <h1>Sign in to add recipes to favourites</h1>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex flex-wrap justify-center py-10">
          {favourites.length > 0 ? (
            favourites.map((favourite, index) => (
              <div className="md:mr-[3rem] w-full md:w-auto mb-10" key={index}>
                <Favourite favourite={favourite} />
              </div>
            ))
          ) : (
            <div className="h-[35vh] flex justify-center items-center ">
              <h1 className="text-white lg:pl-10">Nothing to show</h1>
            </div>
          )}
        </div>
      </SignedIn>
    </div>
  );
};

export default Page;
