import React from "react";
import { Container } from "react-bootstrap";
import Header from "./../components/Header";
import Main from "./../components/Main";
import "./../styles/style.scss";

const Layout = () => {
  return (
    <Container fluid>
      <Header />
      <Main />
    </Container>
  );
};
export default Layout;
