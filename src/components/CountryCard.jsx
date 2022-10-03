import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../features/favoritesSlice";
import { Link } from "react-router-dom";

let approx = require("approximate-number");

const CountryCard = ({ country }) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countriesList);
  const favorites = useSelector((state) => state.favorites.favoritesList);

  const addFavorite = (country) => {
    dispatch(addToFavorites(country));
    localStorage.setItem("favorites", JSON.stringify([...favorites, country]));
  };

  const removeFavorite = (country) => {
    dispatch(removeFromFavorites(country));
    const filteredFavorites = JSON.parse(
      localStorage.getItem("favorites")
    ).filter((c) => c.name.common !== country.name.common);
    localStorage.setItem("favorites", JSON.stringify([...filteredFavorites]));
  };

  const checkFavorite = () => {
    const arr = favorites.filter((c) => c.name.common === country.name.common);
    return arr.length > 0;
  };

  return (
    <div className="card">
      <div className="flag">{country.flag}</div>
      <Link
        to={`/countries/${country.name.common}`}
        state={{ from: "countries", country: country, countries: countries }}
      >
        <h3>{country.name.common}</h3>
      </Link>
      <p>{country.name.official}</p>
      <p>Population: {approx(country.population)}</p>
      <p>Language(s): {Object.values(country.languages || {}).join(", ")}</p>
      <p>
        Currencies:{" "}
        {Object.values(country.currencies || {})
          .map((currency) => currency.name)
          .join(", ")}
      </p>
      {checkFavorite() ? (
        <button onClick={() => removeFavorite(country)}>&#128420;</button>
      ) : (
        <button onClick={() => addFavorite(country)}>&#9825;</button>
      )}
    </div>
  );
};

export default CountryCard;
