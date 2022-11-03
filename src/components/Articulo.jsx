import { Button, Card } from "react-bootstrap";
import React from "react";

export function Articulo({ id, name, precio, imgURL }) {
  const cantidad = 1;
  return (
    <Card className="h-100" style={{ background: "#7F0102", color: "white" }}>
      <Card.Img
        variant="top"
        src={imgURL}
        height="300px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">${precio}</span>
        </Card.Title>
        <div className="mt-auto">
          {cantidad == 0 ? (
            <Button className="w-100" variant="light">
              Agregar al carrito
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button className="w-100" variant="light">
                  -
                </Button>
                <span className="fs-3">{cantidad}</span>
                <Button className="w-100" variant="light">
                  +
                </Button>
              </div>
              <Button variant="danger" size="sm">
                x
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
