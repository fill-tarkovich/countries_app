import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import CountryCard from "./CountryCard.jsx";
import SearchInput from "./SearchInput.jsx";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favoritesList);
  const searchInput = useSelector((state) => state.countries.search);
  
    return (
      <Container fluid>
        <Row>
          <Col className="mt-5 d-flex justify-content-center">
            <SearchInput />
          </Col>
        </Row>
        <Row xs={2} md={3} lg={4} className=" g-3">
          {favorites
            .filter((c) => {
              return c.name.common.toLowerCase().includes(searchInput.toLowerCase());
            })
            .map((country) => (
              <Col className="mt-5" key={country.name.official}>
                <CountryCard country={country} />
              </Col>
            ))}
        </Row>
      </Container>
    );
};

export default Favorites;
