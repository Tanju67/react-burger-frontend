import React from "react";
import styles from "./SectionLayout.module.css";
import Reveal from "./Reveal";
import Logo from "./Logo";

function SectionLayout({ title, children, className }) {
  return (
    <div className={`${styles.section} ${className}`}>
      <Reveal>
        <div className={styles.title}>
          <Logo className={styles.titleLogo} text={false} />
          <h2>{title}</h2>
        </div>
      </Reveal>
      <Reveal>{children}</Reveal>
    </div>
  );
}

export default SectionLayout;
