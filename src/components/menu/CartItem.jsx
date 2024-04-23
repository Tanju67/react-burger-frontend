import React from "react";
import styles from "./CartItem.module.css";
import { getExtras } from "../../shared/utils/helper";

function CartItem({ item }) {
  const { extrasTitle, extrasPrice } = getExtras(item.extras);

  const itemPrice = item.price * item.quantity + extrasPrice;
  return (
    <div className={styles.item}>
      <p className={styles.title}>
        <strong>{item.title}</strong>
        <span className={styles.clsBtn}>&times;</span>
      </p>
      <p className={styles.price}>
        {extrasTitle}
        <span>${itemPrice.toFixed(2)}</span>
      </p>
    </div>
  );
}

export default CartItem;
