import React from "react";

const CountryCard = ({ name, flag }) => {
  return (
    <div>
      <h3>{name}</h3>
      <div className="flag">{flag}</div>
    </div>
  );
};

export default CountryCard;
