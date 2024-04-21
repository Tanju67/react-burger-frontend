import React from "react";
import styles from "./MenuCart.module.css";
import Card from "../../shared/UIElements/Card";
import CartItem from "./CartItem";
import Button from "../../shared/UIElements/Button";

const cart = {
  totalPrice: 31,
  item: [
    {
      title: "burger",
      quantity: 2,
      price: 10.5,
      extras: { basilikum: 0.5, cheddar: 0.5 },
    },
    {
      title: "chicken",
      quantity: 1,
      price: 8,
      extras: { basilikum: 0.5, cheddar: 0.5 },
    },
  ],
};

function MenuCart() {
  return (
    <div className={styles.cartSection}>
      <Card className={styles.cart}>
        <h2>Cart</h2>

        {cart.item.length > 0 &&
          cart.item.map((item, i) => <CartItem key={i} item={item} />)}
        {cart.item.length > 0 && (
          <p className={styles.total}>
            <strong>Total Price</strong>{" "}
            <span>${cart.totalPrice.toFixed(2)}</span>
          </p>
        )}
        {cart.item.length === 0 && <p>No product in your cart.</p>}
      </Card>
      <Button rounded={true} size={"md"}>
        Order Now
      </Button>
    </div>
  );
}

export default MenuCart;
