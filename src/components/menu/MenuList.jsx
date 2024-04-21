import React from "react";
import styles from "./MenuList.module.css";
import img from "../../assets/pexels-enginakyurt-1552641.jpg";
import ListItem from "./ListItem";

const list = [
  {
    id: "p1",
    title: "burger",
    image: img,
  },
  {
    id: "p2",
    title: "burger",
    image: img,
  },
  {
    id: "p3",
    title: "burger",
    image: img,
  },
  {
    id: "p4",
    title: "burger",
    image: img,
  },
  {
    id: "p5",
    title: "burger",
    image: img,
  },
  {
    id: "p6",
    title: "burger",
    image: img,
  },
  {
    id: "p7",
    title: "burger",
    image: img,
  },
];

function MenuList() {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default MenuList;
