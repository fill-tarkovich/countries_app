import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCountries = () =>
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=name,flag,ccn3,population,languages,currencies"
      )
      .then((res) => setCountries(res.data));

  useEffect(() => {
    setLoading(true);
    getCountries();
    setLoading(false);
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="cards_list">
        {countries.map((country) => (
          <CountryCard
            key={country.ccn3}
            flag={country.flag}
            name={country.name.common}
            official={country.name.official}
            population={country.population}
            languages={Object.values(country.languages || {}).join(", ")}
            currencies={Object.values(country.currencies)
              .map((currency) => currency.name)
              .join(", ")}
          />
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
