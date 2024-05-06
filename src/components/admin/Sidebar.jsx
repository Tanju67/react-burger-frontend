import { NavLink } from "react-router-dom";
import { MdMenuBook } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { MdOutlineBorderColor } from "react-icons/md";
import styles from "./Sidebar.module.css";
import Logo from "../../shared/UIElements/Logo";

function Sidebar() {
  return (
    <nav className={styles.sidebar}>
      <Logo className={styles.boardLogo} text={false} />
      <ul>
        <li>
          <NavLink
            to={"menus"}
            className={({ isActive }) => (isActive ? styles.active : "")}
            end
          >
            <MdMenuBook /> <span>Menus</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"products"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <FaProductHunt />
            <span>Products</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"orders"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <MdOutlineBorderColor />
            <span>Orders</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
