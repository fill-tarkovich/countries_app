import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "../features/countriesSlice";
import favoritsSliceReducer from "../features/favoritsSlice";

export default configureStore({
  reducer: {
    countries: countriesSlice,
    favorites: favoritsSliceReducer,
  },
});
