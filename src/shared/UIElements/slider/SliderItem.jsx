/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./SliderItem.module.css";

function SliderItem({ image, title, id }) {
  return (
    <Link to={"menu/" + id} className={styles.item}>
      <img src={image} alt="menu_img" />
      <span>{title}</span>
    </Link>
  );
}

export default SliderItem;
