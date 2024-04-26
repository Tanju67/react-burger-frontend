import React, { useState } from "react";
import styles from "./MenuProducts.module.css";
import MenuNav from "../../shared/UIElements/MenuNav";
import { IoArrowBackOutline, IoGrid } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaListUl } from "react-icons/fa6";
import Button from "../../shared/UIElements/Button";
import Item from "./Item";
import AddProduct from "./AddProduct";

const products = [
  {
    id: "p1",
    title: "Monster Burger",
    description:
      "this is awesome burger.You can eat it everytime. we suggest it mit fresh onion.",
    price: 9.9,
    menuTitle: "burger",
  },
  {
    id: "p2",
    title: "Monster Burger",
    description:
      "this is awesome burger.You can eat it everytime. we suggest it mit fresh onion.",
    price: 9.9,
    menuTitle: "burger",
  },
  {
    id: "p3",
    title: "Monster Burger",
    description:
      "this is awesome burger.You can eat it everytime. we suggest it mit fresh onion.",
    price: 9.9,
    menuTitle: "burger",
  },
  {
    id: "p4",
    title: "Monster Burger",
    description:
      "this is awesome burger.You can eat it everytime. we suggest it mit fresh onion.",
    price: 9.9,
    menuTitle: "burger",
  },
  {
    id: "p5",
    title: "Monster Burger",
    description:
      "this is awesome burger.You can eat it everytime. we suggest it mit fresh onion.",
    price: 9.9,
    menuTitle: "burger",
  },
  {
    id: "p6",
    title: "Monster Burger",
    description:
      "this is awesome burger.You can eat it everytime. we suggest it mit fresh onion.",
    price: 9.9,
    menuTitle: "burger",
  },
  {
    id: "p7",
    title: "Monster Burger",
    description:
      "this is awesome burger.You can eat it everytime. we suggest it mit fresh onion.",
    price: 9.9,
    menuTitle: "burger",
  },
];

function MenuProducts() {
  const [showForm, setShowForm] = useState(false);
  const [viewIndex, setViewIndex] = useState(1);
  return (
    <div className={styles.content}>
      <div className={styles.nav}>
        <div className={styles.left}>
          <Link to={".."}>
            <IoArrowBackOutline />
          </Link>
          <span>{products[0].menuTitle}</span>
        </div>
        <div className={styles.options}>
          {!showForm && (
            <>
              <span
                onClick={() => setViewIndex(1)}
                className={`${viewIndex === 1 ? styles.active : ""}`}
              >
                <IoGrid />
                Grid
              </span>
              <span
                onClick={() => setViewIndex(2)}
                className={`${viewIndex === 2 ? styles.active : ""}`}
              >
                <FaListUl />
                List
              </span>
            </>
          )}
          <Button
            onClick={() => setShowForm((prev) => !prev)}
            size={"sm"}
            rounded={true}
          >
            {showForm ? "< Back" : "+ Add Product"}
          </Button>
        </div>
      </div>
      {!showForm && (
        <ul
          className={`${viewIndex === 1 ? styles.grid : ""} ${
            viewIndex === 2 ? styles.list : ""
          }`}
        >
          {products.map((item) => (
            <Item key={item.id} item={item} viewIndex={viewIndex} />
          ))}
        </ul>
      )}

      {showForm && <AddProduct />}
    </div>
  );
}

export default MenuProducts;
