import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../features/favoritsSlice";
let approx = require("approximate-number");

const CountryCard = ({
  country,
  name,
  flag,
  official,
  population,
  languages,
  currencies,
}) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countriesList);
  const favorits = useSelector((state) => state.favorites.favoritesList);

  const addFavorite = (country) => {
    dispatch(addToFavorites(country));
    localStorage.setItem("favorites", JSON.stringify([...favorits, country]));
  };

  const removeFavorite = (country) => {
    dispatch(removeFromFavorites(country));
    const filteredFavs = JSON.parse(localStorage.getItem("favorites")).filter(
      (c) => c.name.common !== country.name.common
    );
    localStorage.setItem("favorites", JSON.stringify([...filteredFavs]));
  };

  const checkFavorite = (country) => {
    const arr = favorits.filter((c) => c.name.common === country.name.common);
    return arr.length > 0;
  };

  return (
    <div className="card">
      <div className="flag">{flag}</div>
      <h3>{name}</h3>
      <p>{official}</p>
      <p>Population: {approx(population)}</p>
      <p>Language(s): {languages}</p>
      <p>Currencies: {currencies}</p>
      {checkFavorite() ? (
        <button onClick={() => removeFavorite(country)}>&#9825;</button>
      ) : (
        <button onClick={() => addFavorite(country)}>&#128420;</button>
      )}
    </div>
  );
};

export default CountryCard;
