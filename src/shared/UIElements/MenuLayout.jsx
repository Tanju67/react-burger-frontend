import React from "react";
import styles from "./MenuLayout.module.css";
import MenuNav from "./MenuNav";
import MenuCart from "../../components/menu/MenuCart";

function MenuLayout({ children, title }) {
  return (
    <section className={styles.page}>
      <div className={styles.nav}>
        <MenuNav title={title} />
      </div>

      <div className={styles.content}>
        {children}
        <MenuCart />
      </div>
    </section>
  );
}

export default MenuLayout;
