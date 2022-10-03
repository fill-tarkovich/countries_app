import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SingleCountry = () => {
  const location = useLocation();
  const country = location.state.country;
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // const navigate = useNavigate();

  const KEY = "2fa44403ccb9a8475bc6fccef5a5cf0b";

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${KEY}`
      )
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      })
      .then((res) => {
        setWeather(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{country.name.common}</h2>
      <h3>{country.capital}</h3>
      {!error && (
        <div>
          <p>
            Right now it is <strong>{parseInt(weather.main.temp)} </strong>
            degrees in {country.capital} and {weather.weather[0].description}
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
        </div>
      )}
    </div>
  );
};

export default SingleCountry;
