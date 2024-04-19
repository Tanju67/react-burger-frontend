import React from "react";
import styles from "./Home.module.css";
import Header from "./Header";
import MainNavigation from "../../shared/UIElements/mainNavigation/MainNavigation";

function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.nav}>
        <MainNavigation />
      </div>
      <Header />
    </div>
  );
}

export default Home;
