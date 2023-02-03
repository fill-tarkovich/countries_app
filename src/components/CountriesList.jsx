import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CountryCard from "./CountryCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { initializeCountries } from "../features/countriesSlice";
import SearchInput from "./SearchInput";

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
          <SearchInput/>
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
