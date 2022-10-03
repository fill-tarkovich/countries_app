import { createSlice } from "@reduxjs/toolkit";

export const favoritsSlice = createSlice({
  name: "favorites",
  initialState: {
    favoritesList: [],
  },
  reducers: {
    setFavorites(state, action) {
      state.favoritesList = action.payload;
    },
    addToFavorites(state, action) {
      state.favoritesList = [...state.favoritesList, action.payload];
    },
    removeFromFavorites(state, action) {
      state.favoritesList = state.favoritesList.filter(
        (country) => country.name.common !== action.payload.name.common
      );
    },
  },
});

export const initializeFavorites = () => {
  const favoritsFromLocal = JSON.parse(localStorage.getItem("favorites"));
  if (favoritsFromLocal) {
    return setFavorites(favoritsFromLocal);
  }
  return setFavorites([]);
};

export const { setFavorites, addToFavorites, removeFromFavorites } =
  favoritsSlice.actions;
export const exportFavList = (state) => state["favorites"].favoritesList;

export default favoritsSlice.reducer;
