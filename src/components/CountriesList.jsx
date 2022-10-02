import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountryCard from "./CountryCard";

import { initializeCountries } from "../features/countriesSlice";

const CountriesList = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.isLoading);

  useEffect(() => {
    dispatch(initializeCountries());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="cards_list">
        {countries.map((country) => (
          <CountryCard
            key={country.name.official}
            flag={country.flag}
            name={country.name.common}
            official={country.name.official}
            population={country.population}
            languages={Object.values(country.languages || {}).join(", ")}
            currencies={Object.values(country.currencies || {})
              .map((currency) => currency.name)
              .join(", ")}
          />
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
