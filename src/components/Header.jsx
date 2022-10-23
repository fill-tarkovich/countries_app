import React from "react";
import { useSelector } from "react-redux";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <Row>
      <Navbar bg="light" variant="light">
        <Container className="justify-content-end">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/countries">
                <Nav.Link>Countries</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/favorites">
                <Nav.Link className="ml-5">
                  Favorites(
                  {useSelector((state) => state.favorites.favoritesList)
                    .length ?? 0}
                  )
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
