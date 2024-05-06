/* eslint-disable react/prop-types */
import ProductItem from "./ProductItem";
import styles from "./BoardProduct.module.css";

function BoardProduct({ data }) {
  return (
    <div className={styles.board}>
      <div className={styles.nav}>
        <span>Products</span>
      </div>
      <ul>
        {data.map((item) => (
          <ProductItem key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default BoardProduct;
