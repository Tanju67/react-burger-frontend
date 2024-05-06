/* eslint-disable react/prop-types */
import styles from "./MenuLayout.module.css";
import MenuNav from "./MenuNav";
import MenuCart from "../../components/menu/MenuCart";

function MenuLayout({
  children,
  title,
  orderBtn = true,
  sidebar = true,
  cart,
  confirm,
}) {
  return (
    <section className={`${styles.page} `}>
      <div className={styles.nav}>
        <MenuNav title={title} cart={cart} />
      </div>

      <div className={`${styles.content} ${confirm ? styles.confirm : ""}`}>
        {children}
        {sidebar && <MenuCart orderBtn={orderBtn} confirm={confirm} />}
      </div>
    </section>
  );
}

export default MenuLayout;
