import React from "react";
import { updateSearchTerm, handleEmptySearchTerm } from "@/redux/recipeSlice";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";

const SearchBar = () => {
  const dispatch = useDispatch();

  const debouncedHandleSearch = debounce((searchTerm) => {
    if (searchTerm === "") {
      dispatch(handleEmptySearchTerm());
    } else {
      dispatch(updateSearchTerm(searchTerm));
    }
  }, 400);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    debouncedHandleSearch(searchTerm);
  };

  return (
    <div className="flex justify-center">
      <input
        type="text"
        onChange={handleSearch}
        placeholder="eg. Cake, Vegan"
        className="bg-black border border-gray-800 w-full md:w-[70%] lg:w-[50%]
         text-gray-300 text-md rounded-full focus:ring-1 focus:ring-slate-800 focus:border-slate-800 block
            p-2.5 outline-none px-5 placeholder:text-sm shadow-xl"
      />
    </div>
  );
};

export default SearchBar;
