/* eslint-disable react/prop-types */
import { getExtras } from "../../shared/utils/helper";
import styles from "./Product.module.css";

function Product({ item }) {
  const { extrasTitle, extrasPrice } = getExtras(item.extras);

  const itemPrice = item.price + extrasPrice;
  return (
    <div className={styles.item}>
      <p className={styles.title}>
        <strong>{item.title}</strong>
      </p>
      <p className={styles.price}>
        <span>{extrasTitle}</span>
        <span>${itemPrice.toFixed(2)}</span>
      </p>
    </div>
  );
}

export default Product;
