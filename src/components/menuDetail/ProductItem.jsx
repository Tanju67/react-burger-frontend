import React from "react";
import styles from "./ProductItem.module.css";
import Card from "../../shared/UIElements/Card";
import { Link } from "react-router-dom";

function ProductItem({ item }) {
  return (
    <li className={styles.item}>
      <Link to={`order/${item.id}`}>
        <Card className={styles.itemCard}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <span>${item.price.toFixed(2)}</span>
        </Card>
      </Link>
    </li>
  );
}

export default ProductItem;
