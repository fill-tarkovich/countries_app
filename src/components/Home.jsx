import React from "react";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Row className="justify-content-end">
      <Col className="col-5 bg-light" style={{height: "200px", marginTop: "10%", fontSize: "1.2rem"}}>
        <span style={{fontWeight: "bold"}}>Countries app </span>is a simple React application made in
        Business College Helsinki lessons. App uses{" "}
        <a href="https://restcountries.com/">https://restcountries.com/ </a> and{" "}
        <a href="https://openweathermap.org/">https://openweathermap.org/</a>
        </Col>
    </Row>
  );
};

export default Home;
