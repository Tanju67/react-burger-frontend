import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import Logo from "../Logo";
import styles from "./FooterNav.module.css";

function FooterNav() {
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
    <nav className={styles.footerNav}>
      <ul>
        <li>
          <Logo text={false} />
        </li>

        <li>
          <Link to={"menu"}>Menu</Link>
        </li>
        <li>|</li>
        {role === "user" && (
          <>
            <li>
              <Link to={"order-history"}>My Order</Link>
            </li>
            <li>|</li>
          </>
        )}
        {role === "admin" && (
          <>
            <li>
              <Link to={"dashboard/menus"}>Admin Dashboard</Link>
            </li>
            <li>|</li>
          </>
        )}
        <li onClick={clickHandler}>
          <Link> {isLoggedIn ? "Logout" : "Login"}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
