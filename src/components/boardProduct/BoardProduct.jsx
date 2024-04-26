import React from "react";
import styles from "./BoardProduct.module.css";
import img from "../../assets/pexels-foodie-factor-162291-539451.jpg";
import ProductItem from "./ProductItem";

const menu = [
  { id: "m1", title: "Burger", image: img },
  { id: "m2", title: "Burger Menu", image: img },
  { id: "m3", title: "Dips", image: img },
  { id: "m4", title: "Wraps", image: img },
  { id: "m5", title: "Soups", image: img },
  { id: "m6", title: "Burger", image: img },
  { id: "m7", title: "Burger", image: img },
  { id: "m8", title: "Burger", image: img },
  { id: "m9", title: "Burger", image: img },
];

function BoardProduct() {
  return (
    <div className={styles.board}>
      <div className={styles.nav}>
        <span>Products</span>
      </div>
      <ul>
        {menu.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default BoardProduct;
