// import Articulos from "./articulos.json";
import { Col, Row } from "react-bootstrap";
import { Articulo } from "./Articulo.tsx";
import React, { useEffect, useState } from "react";

export const Store = () => {
  const [Articulos, setItems] = useState([]);
  const formio = "https://sgjthupruxexmrb.form.io/mangas/submission";
  function pullJson() {
    fetch(formio)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  }

  useEffect(() => {
    pullJson();
  }, []);

  console.log(Articulos);

  // var data = fetch(formio);
  // console.log("pico pal q lee", data);

  return (
    <>
      <h1 style={{ color: "white", margin: "1rem" }}>Productos:</h1>
      <Row md={2} xs={1} lg={3} className="g-3" style={{ margin: "1rem" }}>
        {Articulos.map((item) => (
          <Col key={item.id}>
            <Articulo {...item["data"]} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
