import React from "react";
import { useSelector } from "react-redux";
import CountryCard from "./CountryCard.jsx";

const Favorites = () => {
  const favsList = useSelector((state) => state.favorites.favoritesList);
  const searchInput = useSelector((state) => state.countries.search);
  return favsList
    .filter((c) =>
      c.name.common.toLowerCase().includes(searchInput.toLowerCase())
    )
    .map((country) => <CountryCard country={country} />);
};

export default Favorites;
