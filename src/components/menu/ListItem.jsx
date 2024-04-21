import React from "react";
import styles from "./ListItem.module.css";
import Card from "../../shared/UIElements/Card";
import { Link } from "react-router-dom";

function ListItem({ item }) {
  return (
    <Card className={styles.item}>
      <li>
        <Link to={`${item.id}`}>
          <img src={item.image} alt={item.title} />
        </Link>
        <span>{item.title}</span>
      </li>
    </Card>
  );
}

export default ListItem;
