import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountryCard from "./CountryCard";

import { initializeCountries, search } from "../features/countriesSlice";
const CountriesList = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.isLoading);
  const searchInput = useSelector((state) => state.countries.search);

  useEffect(() => {
    dispatch(initializeCountries());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="cards_list">
        <form className="search">
          <input
            type="text"
            placeholder="type here..."
            onChange={(e) => dispatch(search(e.target.value))}
          />
        </form>
        {countries
          .filter((c) =>
            c.name.common.toLowerCase().includes(searchInput.toLowerCase())
          )
          .map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
      </div>
    </div>
  );
};

export default CountriesList;
