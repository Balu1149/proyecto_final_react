import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext.tsx";
import React, { useEffect, useState } from "react";
import { CartItem } from "./CartItem.tsx";

type Shopping_cartProps = {
  isOpen: boolean;
};

export function Shopping_cart({ isOpen }: Shopping_cartProps) {
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

  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carrito</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total $
            {cartItems.reduce((total, cartItem) => {
              const item = Articulos.find((i) => i.data.id === cartItem.id);
              return total + (item?.data.precio || 0) * cartItem.quantity;
            }, 0)}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
