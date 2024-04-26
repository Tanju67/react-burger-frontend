import React from "react";
import styles from "./ProductItem.module.css";
import { Link } from "react-router-dom";

function ProductItem({ item }) {
  return (
    <Link to={item.id} className={styles.item}>
      <img src={item.image} alt={item.title} />
      <span>{item.title}</span>
    </Link>
  );
}

export default ProductItem;
