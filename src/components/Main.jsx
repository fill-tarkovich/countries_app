import React from "react";
import { Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <Row className="layout">
      <Outlet />
    </Row>
  );
};

export default Main;
