import React from "react";
import styles from "./Logo.module.css";
import { PiHamburgerFill } from "react-icons/pi";

function Logo({ text = true, className }) {
  if (!text) {
    return <PiHamburgerFill className={`${className}`} />;
  }
  return (
    <div className={`${styles.logo} ${className}`}>
      <span>
        <PiHamburgerFill />
      </span>
      <span>R-BURGER</span>
    </div>
  );
}

export default Logo;
