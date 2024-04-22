import React from "react";
import styles from "./Products.module.css";
import Card from "../../shared/UIElements/Card";
import ProductItem from "./ProductItem";

const products = [
  {
    id: "p1",
    title: "Monster Burger",
    price: 14.5,
    description: "Tripple Burger with salad, onion, 3x cheddar and tomatio",
  },
  {
    id: "p2",
    title: "Monster Burger",
    price: 14.5,
    description: "Tripple Burger with salad, onion, 3x cheddar and tomatio",
  },
  {
    id: "p3",
    title: "Monster Burger",
    price: 14.5,
    description: "Tripple Burger with salad, onion, 3x cheddar and tomatio",
  },
  {
    id: "p4",
    title: "Monster Burger",
    price: 14.5,
    description: "Tripple Burger with salad, onion, 3x cheddar and tomatio",
  },
  {
    id: "p5",
    title: "Monster Burger",
    price: 14.5,
    description: "Tripple Burger with salad, onion, 3x cheddar and tomatio",
  },
  {
    id: "p6",
    title: "Monster Burger",
    price: 14.5,
    description: "Tripple Burger with salad, onion, 3x cheddar and tomatio",
  },
  {
    id: "p7",
    title: "Monster Burger",
    price: 14.5,
    description: "Tripple Burger with salad, onion, 3x cheddar and tomatio",
  },
];

function Products({ menu }) {
  return (
    <div className={styles.products}>
      <div className={styles.imgBox}>
        <img src={menu.image} alt={menu.title} />
      </div>
      <ul>
        {products.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Products;
