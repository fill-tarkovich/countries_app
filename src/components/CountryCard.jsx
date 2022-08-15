import React from "react";

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
      <p>Population: {population}</p>
      <p>Language(s): {languages}</p>
      <p>Currencies: {currencies}</p>
    </div>
  );
};

export default CountryCard;
