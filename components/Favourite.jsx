"use client";
import { removeItemFromFavourites } from "@/redux/recipeSlice";
import { useDispatch } from "react-redux";
const Favourite = ({ favourite }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg_gradient shadow rounded-lg w-full  md:w-[225px] h-[275px] relative">
      <div
        className="w-[30px] absolute top-0 right-0 mt-1 mr-1 cursor-pointer"
        onClick={() => dispatch(removeItemFromFavourites(favourite.recipeName))}
      >
        <img src="/remove.png" alt="delete-icon" className="w-full" />
      </div>
      <div className="w-full h-[170px] ">
        <img
          src={favourite.image}
          alt="recipe"
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-end">
        <div className="px-3 pt-3 pb-2">
          <p className="text-white font-semibold">{favourite.recipeName}</p>
        </div>
        <div className="flex px-3 pb-3">
          <div className="w-[110px]  py-1.5">
            <p className="text-center text-[12px] capitalize bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500">
              {favourite.cuisineType}
            </p>
          </div>
          <div className="w-[100px] py-1.5">
            <p className="text-center text-[12px] bg-[#0c452243] shadow-xl rounded-full mr-3 text-green-500">
              {favourite.mealType}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favourite;
