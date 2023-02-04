import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Col, Container, Row, Image } from "react-bootstrap";

const SingleCountry = () => {
  const location = useLocation();
  const country = location.state.country;
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
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
  }, [country.capital]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
       <Row className="m-5">
        <Col className="bg-light">
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
          <button className="btn btn-secondary" style={{marginTop: "20px"}} onClick={() => navigate("/countries")}>Back to countries</button>

      </Col>
      <Col>
          {" "}
          <Image thumbnail src={`https://source.unsplash.com/featured/1600x900?${country.capital}`}></Image>
        </Col>
    </Row>
    </Container>
  );
};

export default SingleCountry;
