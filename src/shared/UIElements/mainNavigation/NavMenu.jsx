import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import Button from "../Button";
import styles from "./NavMenu.module.css";

function NavMenu() {
  const role = useSelector((state) => state.auth.user.role);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (isLoggedIn) {
      dispatch(authActions.onLogout());
    } else {
      navigate("login");
    }
  };
  return (
    <ul className={styles.menu}>
      <li>
        <NavLink to={"menu"}>Menu</NavLink>
      </li>
      {role === "user" && (
        <li>
          <NavLink to={"order-history"}>My Order</NavLink>
        </li>
      )}
      {role === "admin" && (
        <li>
          <NavLink to={"dashboard/menus"}>Admin Dashboard</NavLink>
        </li>
      )}
      <li>
        <Button
          className={styles.loginBtn}
          onClick={clickHandler}
          size={"sm"}
          rounded={true}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </Button>
      </li>
    </ul>
  );
}

export default NavMenu;
