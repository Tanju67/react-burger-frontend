import React from "react";
import styles from "./About.module.css";
import SectionLayout from "../../shared/UIElements/SectionLayout";
import img1 from "../../assets/organic-shape-01.svg";
import img2 from "../../assets/organic-shape-02.svg";
import img3 from "../../assets/organic-shape-03.svg";
import { IoOptionsOutline } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { IoTimerOutline } from "react-icons/io5";

function About() {
  return (
    <SectionLayout title={"About online order"}>
      <ul className={styles.content}>
        <li>
          <div className={styles.bg}>
            <img src={img1} alt="" />
            <IoOptionsOutline />
          </div>
          <h3>Different menu options</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <div className={styles.bg}>
            <img src={img2} alt="" />
            <MdShoppingCart />
          </div>
          <h3>Easy order</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <div className={styles.bg}>
            <img src={img3} alt="" />
            <IoTimerOutline />
          </div>
          <h3>Delivered in 30 minutes</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </li>
      </ul>
    </SectionLayout>
  );
}

export default About;
