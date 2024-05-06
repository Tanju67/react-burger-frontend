/* eslint-disable react/prop-types */
import { PiHamburgerFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo({ text = true, className }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };
  if (!text) {
    return (
      <PiHamburgerFill
        onClick={clickHandler}
        className={`${styles.logo} ${className}`}
      />
    );
  }
  return (
    <div className={`${styles.logo} ${className}`}>
      <span>
        <PiHamburgerFill />
      </span>
      <span className={styles.title}>R-BURGER</span>
    </div>
  );
}

export default Logo;
