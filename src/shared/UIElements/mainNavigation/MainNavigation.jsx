import React from "react";
import styles from "./MainNavigation.module.css";
import Logo from "../Logo";
import NavMenu from "./NavMenu";

function MainNavigation({ main = true }) {
  return (
    <>
      {main && (
        <nav className={styles.nav}>
          <Logo />
          <NavMenu />
        </nav>
      )}
      {!main && (
        <nav className={styles.navSub}>
          <Logo />
          <NavMenu />
        </nav>
      )}
    </>
  );
}

export default MainNavigation;
