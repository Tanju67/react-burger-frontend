import React from "react";
import styles from "./OrderConfirm.module.css";
import MenuLayout from "../../shared/UIElements/MenuLayout";
import ConfirmForm from "./ConfirmForm";

function OrderConfirm() {
  return (
    <MenuLayout title={"Confirm Your Order"} orderBtn={false}>
      <ConfirmForm />
    </MenuLayout>
  );
}

export default OrderConfirm;
