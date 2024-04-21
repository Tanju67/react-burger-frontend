import React from "react";
import styles from "./CartItem.module.css";

function CartItem({ item }) {
  const extras = Object.keys(item.extras).reduce((cur, sum) => {
    return cur + " + " + sum;
  });
  const extrasPrice = Object.values(item.extras).reduce((cur, sum) => {
    return cur + sum;
  }, 0);

  const itemPrice = item.price * item.quantity + extrasPrice;
  return (
    <div className={styles.item}>
      <p className={styles.title}>
        <strong>
          {item.quantity} x {item.title}
        </strong>
        <span className={styles.clsBtn}>&times;</span>
      </p>
      <p className={styles.price}>
        <span>{extras}</span>
        <span>${itemPrice.toFixed(2)}</span>
      </p>
    </div>
  );
}

export default CartItem;
