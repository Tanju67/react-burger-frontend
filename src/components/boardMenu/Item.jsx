import React from "react";
import styles from "./Item.module.css";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function Item({ item, viewIndex }) {
  return (
    <li className={`${styles.item} ${viewIndex === 3 ? styles.view : ""}`}>
      <div className={styles.contentBox}>
        <img src={item.image} alt={item.title} />
        <span>{item.title}</span>
      </div>
      <div className={styles.actionBox}>
        <span>
          <FaEdit />
        </span>
        <span>
          <MdDeleteForever />
        </span>
      </div>
    </li>
  );
}

export default Item;
