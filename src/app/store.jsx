import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "../features/countriesSlice";
import favoritesSliceReducer from "../features/favoritesSlice";

export default configureStore({
  reducer: {
    countries: countriesSlice,
    favorites: favoritesSliceReducer,
  },
});
