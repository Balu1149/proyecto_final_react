import Articulos from "./articulos.json";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Articulo } from "./Articulo";

export const Store = () => {
  return (
    <>
      <h1 style={{ color: "white", margin: "1rem" }}>Productos:</h1>
      <Row md={2} xs={1} lg={3} className="g-3" style={{ margin: "1rem" }}>
        {Articulos.map((item) => (
          <Col key={item.id}>
            <Articulo {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
