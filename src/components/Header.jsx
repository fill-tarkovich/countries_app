import React from "react";
import { useSelector } from "react-redux";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {

const favorites = useSelector((state) => state.favorites.favoritesList);

  return (
    <Row>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container className="justify-content-end">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <LinkContainer to="/">
                <Nav.Link className="me-2">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/countries">
                <Nav.Link className="me-2">Countries</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/favorites">
                <Nav.Link className="me-2">
                  Favorites
                    {favorites.length > 0 ? `(${favorites.length})` : ""}
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default Header;
