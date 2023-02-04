import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../features/favoritesSlice";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import { Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { HeartFillIcon, HeartIcon } from "@primer/octicons-react";

let approx = require("approximate-number");

const CountryCard = ({ country }) => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countriesList);
  const favorites = useSelector((state) => state.favorites.favoritesList);

  const addFavorite = (country) => {
    dispatch(addToFavorites(country));
    localStorage.setItem("favorites", JSON.stringify([...favorites, country]));
  };

  const removeFavorite = (country) => {
    dispatch(removeFromFavorites(country));
    const filteredFavorites = JSON.parse(
      localStorage.getItem("favorites")
    ).filter((c) => c.name.common !== country.name.common);
    localStorage.setItem("favorites", JSON.stringify([...filteredFavorites]));
  };

  const checkFavorite = () => {
    const arr = favorites.filter((c) => c.name.common === country.name.common);
    return arr.length > 0;
  };

  return (
    <Col className="mt-5">
        <Card className="h-100">
           <Card.Img
        variant="top"
        src={country.flags.svg}
        className="rounded-top h-50"
        style={{
          objectFit: "cover",
          minHeight: "200px",
          maxHeight: "200px",
          borderBottom: "1px solid rgba(0, 0, 0, 0.175)",
        }}
      />
          <Card.Body className="d-flex flex-column">
          <LinkContainer
        to={`/countries/${country.name.common}`}
        state={{ from: "countries", country: country, countries: countries }}
        style={{cursor: "pointer", textDecoration: "underline"}}
      >
            <Card.Title>{country.name.common}</Card.Title>
            </LinkContainer>

            <Card.Subtitle className="mb-5 text-muted">
              {country.name.official}
            </Card.Subtitle>
            <ListGroup
              variant="flush"
              className="flex-grow-1 justify-content-end"
            >
              <ListGroupItem>
                <i className="bi bi-people me-2"></i>
                {approx(country.population)}
              </ListGroupItem>
              <ListGroupItem>
                <i className="bi bi-translate me-2"></i>
                {Object.values(country.languages || {}).join(", ")}
              </ListGroupItem>
              <ListGroupItem>
                <i className="bi bi-cash-coin me-2"></i>
                {Object.values(country.currencies || {})
                  .map((currency) => currency.name)
                  .join(", ")}
              </ListGroupItem>
            </ListGroup>
            {checkFavorite() ? (
              <button
                className="btn btn-light"
                onClick={() => removeFavorite(country)}
              >
                <HeartFillIcon></HeartFillIcon>
              </button>
            ) : (
              <button
                className="btn btn-light"
                onClick={() => addFavorite(country)}
              >
                <HeartIcon></HeartIcon>
              </button>
            )}
          </Card.Body>
        </Card>
    </Col>
  );
};

export default CountryCard;
