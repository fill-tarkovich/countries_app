import React from "react";
let approx = require("approximate-number");

const CountryCard = ({
  name,
  flag,
  official,
  population,
  languages,
  currencies,
}) => {
  return (
    <div className="card">
      <div className="flag">{flag}</div>
      <h3>{name}</h3>
      <p>{official}</p>
      <p>Population: {approx(population)}</p>
      <p>Language(s): {languages}</p>
      <p>Currencies: {currencies}</p>
    </div>
  );
};

export default CountryCard;
