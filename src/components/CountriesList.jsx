import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountryCard from "./CountryCard";

import { initializeCountries, search } from "../features/countriesSlice";
import { Link } from "react-router-dom";

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
        {countries.map((country) => (
          <Link
            to={`/countries/${country.name.common}`}
            state={{ country: country }}
            key={country.name.official}
          >
            <CountryCard
              flag={country.flag}
              name={country.name.common}
              official={country.name.official}
              population={country.population}
              languages={Object.values(country.languages || {}).join(", ")}
              currencies={Object.values(country.currencies || {})
                .map((currency) => currency.name)
                .join(", ")}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
