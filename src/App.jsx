import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home";
import CountriesList from "./components/CountriesList";
import SingleCountry from "./components/SingleCountry";
import Favorites from "./components/Favorites";

import { initializeFavorites } from "./features/favoritesSlice";
import { useDispatch } from "react-redux";

import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeFavorites());
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="countries" element={<CountriesList />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="countries/:single" element={<SingleCountry />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
