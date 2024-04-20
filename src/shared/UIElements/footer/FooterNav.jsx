import { Link } from "react-router-dom";
import styles from "./FooterNav.module.css";
import Logo from "../Logo";

function FooterNav() {
  return (
    <nav className={styles.footerNav}>
      <ul>
        <li>
          <Logo text={false} />
        </li>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>|</li>
        <li>
          <Link>Menu</Link>
        </li>
        <li>|</li>
        <li>
          <Link>My Order</Link>
        </li>
        <li>|</li>
        <li>
          <Link>Admin Dashboard</Link>
        </li>
        <li>|</li>
        <li>
          <Link>Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
