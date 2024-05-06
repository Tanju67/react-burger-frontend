import { NavLink, Outlet } from "react-router-dom";
import styles from "./AdminOrder.module.css";

function AdminOrder() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <span>Orders</span>
        <div className={styles.menu}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={"/dashboard/orders"}
            end
          >
            New Orders
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={"/dashboard/orders/today"}
          >
            All Todays Orders
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default AdminOrder;
