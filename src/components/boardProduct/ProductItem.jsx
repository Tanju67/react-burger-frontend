/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./ProductItem.module.css";

function ProductItem({ item }) {
  return (
    <Link to={`${item._id}?title=${item.title}`} className={styles.item}>
      <img src={item.image} alt={item.title} />
      <span>{item.title}</span>
    </Link>
  );
}

export default ProductItem;
