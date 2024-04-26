import React from "react";
import styles from "./Item.module.css";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function Item({ item, viewIndex }) {
  return (
    <div
      className={`${styles.item} ${viewIndex === 1 ? styles.grid : ""} ${
        viewIndex === 2 ? styles.list : ""
      }`}
    >
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <span>${item.price.toFixed(2)}</span>
      {viewIndex === 1 && (
        <div className={styles.btnBox}>
          <em>
            <MdDeleteForever />
            Delete
          </em>
          <em>
            <FaEdit />
            Update
          </em>
        </div>
      )}
      {viewIndex === 2 && (
        <div className={styles.btnBox}>
          <span>
            <FaEdit />
          </span>
          <span>
            <MdDeleteForever />
          </span>
        </div>
      )}
    </div>
  );
}

export default Item;
