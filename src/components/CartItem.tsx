import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext.tsx";
import React, { useEffect, useState } from "react";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
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

  const { removeFromCart } = useShoppingCart();
  const item = Articulos.find((i) => i.data.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.data.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.data.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {item.data.precio}
        </div>
      </div>
      <div> {item.data.precio * quantity}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.data.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
