import React from "react";
import styles from "./NavMenu.module.css";
import { NavLink } from "react-router-dom";
import Button from "../Button";

function NavMenu() {
  return (
    <ul className={styles.menu}>
      <li>
        <NavLink to={"menu"}>Menu</NavLink>
      </li>
      <li>
        <NavLink>My Order</NavLink>
      </li>
      <li>
        <NavLink>Admin Dashboard</NavLink>
      </li>
      <li>
        <Button size={"sm"} rounded={true}>
          Login
        </Button>
      </li>
    </ul>
  );
}

export default NavMenu;
