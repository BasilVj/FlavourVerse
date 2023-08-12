import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    toggleMenu: false,
    searchTerm: "chicken",
    displayingLoginPage: true,
    favourites: [],
  },
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    changeToggleMenu: (state, action) => {
      state.value.toggleMenu = action.payload;
    },
    updateSearchTerm: (state, action) => {
      state.value.searchTerm = action.payload;
    },
    handleEmptySearchTerm: (state) => {
      state.value.searchTerm = initialState.value.searchTerm;
    },
    setDisplayingLoginPage: (state, action) => {
      state.value.displayingLoginPage = action.payload;
    },
    addItemToFavourites: (state, action) => {
      state.value.favourites = [...state.value.favourites, action.payload];
    },    
  },
});

export const {
  changeToggleMenu,
  updateSearchTerm,
  handleEmptySearchTerm,
  setDisplayingLoginPage,
  addItemToFavourites,
} = recipeSlice.actions;
export default recipeSlice.reducer;
