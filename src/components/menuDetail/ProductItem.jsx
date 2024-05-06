/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./ProductItem.module.css";
import Card from "../../shared/UIElements/Card";

function ProductItem({ item }) {
  return (
    <li className={styles.item}>
      <Link to={`order/${item._id}`}>
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
