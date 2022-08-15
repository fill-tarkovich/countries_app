import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "./CountryCard";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCountries = () =>
    axios.get("https://restcountries.com/v3.1/all?fields=name,flag,ccn3");

  useEffect(() => {
    setLoading(true);
    Promise.all([getCountries()]).then(function (results) {
      const countriesData = results[0];
      setCountries(countriesData.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading recepies...</p>;
  }

  return (
    <div>
      <div>
        {countries.map((country) => (
          <CountryCard
            key={country.ccn3}
            flag={country.flag}
            name={country.name.common}
          />
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
