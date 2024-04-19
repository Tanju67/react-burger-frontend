import React from "react";
import styles from "./Header.module.css";
import waveWhite from "../../assets/wave-static-01.svg";
import waveBlue from "../../assets/wave-static-02.svg";
import phone from "../../assets/iphonex-white.png";
import Button from "../../shared/UIElements/Button";

function Header() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>Tasty burger here!</p>
          <h1> Have you tried R-Burger yet?</h1>
          <Button size={"md"} rounded={true}>
            Order now
          </Button>
        </div>
        <div className={styles.img}>
          <img src={phone} alt="" />
        </div>
      </div>
      <div className={styles.styleImage}>
        <img className={styles.whiteImg} src={waveWhite} alt="" />
        <img className={styles.blueImg} src={waveBlue} alt="" />
      </div>
    </section>
  );
}

export default Header;
