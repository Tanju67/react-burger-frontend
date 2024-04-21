import React from "react";
import styles from "./MenuNav.module.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function MenuNav({ title }) {
  return (
    <nav className={styles.nav}>
      <Link>
        <IoArrowBackOutline />
      </Link>
      <h2>{title}</h2>
    </nav>
  );
}

export default MenuNav;
