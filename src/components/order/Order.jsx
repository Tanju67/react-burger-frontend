import React from "react";
import styles from "./Order.module.css";
import MenuLayout from "../../shared/UIElements/MenuLayout";
import OrderContent from "./OrderContent";

const product = {
  id: "p7",
  title: "Monster Burger",
  price: 14.5,
  description: "Tripple Burger with salad, onion, 3x cheddar and tomatio",
};

function Order() {
  return (
    <MenuLayout title={product.title}>
      <OrderContent product={product} />
    </MenuLayout>
  );
}

export default Order;
