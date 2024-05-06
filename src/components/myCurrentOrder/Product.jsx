/* eslint-disable react/prop-types */
import styles from "./Product.module.css";
import { getExtras } from "../../shared/utils/helper";

function Product({ item }) {
  const { extrasTitle, extrasPrice } = getExtras(item.extras);

  const itemPrice = item.price + extrasPrice;
  return (
    <div className={styles.item}>
      <p className={styles.title}>
        <strong>{item.title}</strong>
      </p>
      <p className={styles.price}>
        {extrasTitle}
        <span>${itemPrice.toFixed(2)}</span>
      </p>
    </div>
  );
}

export default Product;
