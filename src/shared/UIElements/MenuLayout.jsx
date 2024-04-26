import React from "react";
import styles from "./MenuLayout.module.css";
import MenuNav from "./MenuNav";
import MenuCart from "../../components/menu/MenuCart";

function MenuLayout({ children, title, orderBtn = true, sidebar = true }) {
  return (
    <section className={styles.page}>
      <div className={styles.nav}>
        <MenuNav title={title} />
      </div>

      <div className={styles.content}>
        {children}
        {sidebar && <MenuCart orderBtn={orderBtn} />}
      </div>
    </section>
  );
}

export default MenuLayout;
