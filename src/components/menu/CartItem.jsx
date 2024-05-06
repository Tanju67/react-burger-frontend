import React from "react";
import styles from "./CartItem.module.css";
import { getExtras } from "../../shared/utils/helper";
import { useHttpRequest } from "../../shared/hooks/send-request";
import { useNavigate } from "react-router-dom";

function CartItem({ item }) {
  const { extrasTitle, extrasPrice } = getExtras(item.extras);
  const { sendRequest } = useHttpRequest();
  const navigate = useNavigate();

  const clickHandler = () => {
    const token = localStorage.getItem("token");
    sendRequest(
      `http://localhost:5000/api/v1/cart/${item._id}`,
      "DELETE",
      undefined,
      undefined,
      {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      (data) => {
        console.log(data);
        navigate(0);
      }
    );
  };

  const itemPrice = item.price + extrasPrice;
  return (
    <div className={styles.item}>
      <p className={styles.title}>
        <strong>{item.title}</strong>
        <span className={styles.clsBtn} onClick={clickHandler}>
          &times;
        </span>
      </p>
      <p className={styles.price}>
        {extrasTitle}
        <span>${itemPrice.toFixed(2)}</span>
      </p>
    </div>
  );
}

export default CartItem;
