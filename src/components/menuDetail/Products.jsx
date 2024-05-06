/* eslint-disable react/prop-types */
import styles from "./Products.module.css";
import ProductItem from "./ProductItem";

function Products({ data }) {
  return (
    <div className={styles.products}>
      <div className={styles.imgBox}>
        <img src={data[0].menu.image} alt={data[0].menu.title} />
      </div>
      <ul>
        {data.map((item) => (
          <ProductItem key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Products;
