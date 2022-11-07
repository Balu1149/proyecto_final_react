import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useShoppingCart } from "../context/ShoppingCartContext.tsx";

export const NavigationBar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <Navbar className="color-nav" expand="lg" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand to="/" as={NavLink}>
          Ryodan-Comiquería
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ alignItems: "center" }} >
            <Nav.Link to="/" as={NavLink}>
              Inicio
            </Nav.Link>
            <Nav.Link to="/productos" as={NavLink}>
              Productos
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Otro link</Nav.Link> */}
          </Nav>
          <Nav style={{ alignItems: "center" }}>
            <Nav.Link href="https://www.instagram.com/ryodan.comiqueria/" >
              <span>
                <FontAwesomeIcon icon={faInstagram} />
              </span>
            </Nav.Link>
            <Nav.Link to="/shopping_cart" as={NavLink}>
              <span class="material-symbols-outlined">shopping_cart</span>
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                }}
              >
                {cartQuantity}
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
