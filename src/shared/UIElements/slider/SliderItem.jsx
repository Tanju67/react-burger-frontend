import React from "react";
import styles from "./SliderItem.module.css";

function SliderItem({ image, title }) {
  return (
    <div className={styles.item}>
      <img src={image} alt="" />
      <span>{title}</span>
    </div>
  );
}

export default SliderItem;
