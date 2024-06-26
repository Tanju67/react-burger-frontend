/* eslint-disable react/prop-types */
import styles from "./MainNavigation.module.css";
import Logo from "../Logo";
import NavMenu from "./NavMenu";

function MainNavigation() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <NavMenu />
    </nav>
  );
}

export default MainNavigation;
