import React from "react";
import styles from "./OrderHistory.module.css";
import MenuLayout from "../../shared/UIElements/MenuLayout";
import ContentHistory from "./ContentHistory";

function OrderHistory() {
  return (
    <MenuLayout title={"Your Orders"} sidebar={false}>
      <ContentHistory />
    </MenuLayout>
  );
}

export default OrderHistory;
