import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CountryCard from "./CountryCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import { initializeCountries, search } from "../features/countriesSlice";
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
    <Container fluid>
      <Row>
        <Col className="mt-5 d-flex justify-content-center">
          <Form>
            <Form.Control
              style={{ width: "18rem" }}
              type="search"
              className="me-2 "
              placeholder="Type here..."
              aria-label="Search"
              onChange={(e) => dispatch(search(e.target.value))}
            />
          </Form>
        </Col>
      </Row>
      <Row xs={2} md={3} lg={4} className=" g-3">
        {countries
          .filter((c) =>
            c.name.common.toLowerCase().includes(searchInput.toLowerCase())
          )
          .map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
      </Row>
    </Container>
  );
};

export default CountriesList;
