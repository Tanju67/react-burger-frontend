import styles from "./Header.module.css";
import waveWhite from "../../assets/wave-static-01.svg";
import waveBlue from "../../assets/wave-static-02.svg";
import phone from "../../assets/iphonex-white.png";
import screenImg from "../../assets/scrnli_5_4_2024_12-19-21 PM.jpg";
import Button from "../../shared/UIElements/Button";

function Header() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>Tasty burger here!</p>
          <h1> Have you tried R-Burger yet?</h1>
          <Button size={"md"} rounded={true} to={"menu"}>
            Order now
          </Button>
        </div>
        <div className={styles.img}>
          <img className={styles.phoneImg} src={phone} alt="" />
          <div className={styles.screenImg}>
            <img src={screenImg} alt="phone" />
          </div>
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
