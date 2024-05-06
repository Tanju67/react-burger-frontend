import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./OrderHistory.module.css";
import MenuLayout from "../../shared/UIElements/MenuLayout";
import NotAuthorized from "../../shared/UIElements/NotAuthorized";

function OrderHistory() {
  const role = useSelector((state) => state.auth.user.role);
  if (role !== "user") {
    return <NotAuthorized />;
  }
  return (
    <MenuLayout title={"Your Orders"} sidebar={false}>
      <div className={styles.navTab}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to={"/order-history"}
          end
        >
          Current Order
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? styles.active : "")}
          to={"/order-history/history"}
          end
        >
          Order History
        </NavLink>
      </div>
      <Outlet />
    </MenuLayout>
  );
}

export default OrderHistory;
