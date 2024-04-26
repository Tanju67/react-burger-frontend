import React, { useState } from "react";
import styles from "./BoardMenu.module.css";
import img from "../../assets/pexels-edwardeyer-687824.jpg";
import Button from "../../shared/UIElements/Button";
import Item from "./Item";
import AddMenu from "./AddMenu";
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";

const menu = [
  {
    id: "b1",
    image: img,
    title: "burger",
  },
  {
    id: "b2",
    image: img,
    title: "burger",
  },
  {
    id: "b3",
    image: img,
    title: "burger",
  },
  {
    id: "b4",
    image: img,
    title: "burger",
  },
  {
    id: "b5",
    image: img,
    title: "burger",
  },
  {
    id: "b6",
    image: img,
    title: "burger",
  },
  {
    id: "b7",
    image: img,
    title: "burger",
  },
  {
    id: "b8",
    image: img,
    title: "burger",
  },
];

function BoardMenu() {
  const [showForm, setShowForm] = useState(false);
  const [viewIndex, setViewIndex] = useState(1);
  return (
    <div className={styles.board}>
      <div className={styles.nav}>
        <span>Menus</span>
        <div className={styles.options}>
          {!showForm && (
            <>
              <span
                onClick={() => setViewIndex(1)}
                className={`${viewIndex === 1 ? styles.active : ""}`}
              >
                <IoGrid />
                Grid
              </span>
              <span
                onClick={() => setViewIndex(2)}
                className={`${viewIndex === 2 ? styles.active : ""}`}
              >
                <FaListUl />
                List
              </span>
              <span
                onClick={() => setViewIndex(3)}
                className={`${viewIndex === 3 ? styles.active : ""}`}
              >
                <FaImage />
                Image
              </span>
            </>
          )}
          <Button
            onClick={() => setShowForm((prev) => !prev)}
            size={"sm"}
            rounded={true}
          >
            {showForm ? "< Back" : "+ Add Menu"}
          </Button>
        </div>
      </div>
      {!showForm && (
        <ul
          className={`${viewIndex === 1 ? styles.grid : ""} ${
            viewIndex === 2 ? styles.list : ""
          } ${viewIndex === 3 ? styles.imgView : ""}`}
        >
          {menu.map((mi) => (
            <Item key={mi.id} item={mi} viewIndex={viewIndex} />
          ))}
        </ul>
      )}
      {showForm && <AddMenu />}
    </div>
  );
}

export default BoardMenu;
