import React from "react";
import styles from "./Menu.module.css";
import MenuNav from "../../shared/UIElements/MenuNav";
import MenuList from "./MenuList";
import MenuCart from "./MenuCart";
import Footer from "../../shared/UIElements/footer/Footer";

function Menu() {
  return (
    <section className={styles.page}>
      <MenuNav title={"All Menus"} />
      <div className={styles.content}>
        <MenuList />
        <MenuCart />
      </div>
      <Footer />
    </section>
  );
}

export default Menu;
