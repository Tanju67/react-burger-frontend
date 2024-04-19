import React from "react";
import styles from "./Menu.module.css";
import SectionLayout from "../../shared/UIElements/SectionLayout";
import Slider from "../../shared/UIElements/slider/Slider";
import img1 from "../../assets/pexels-enginakyurt-1552641.jpg";
import img2 from "../../assets/pexels-caleboquendo-3023476.jpg";
import img3 from "../../assets/pexels-foodie-factor-162291-539451.jpg";
import img4 from "../../assets/pexels-karolina-grabowska-4389665.jpg";
import img5 from "../../assets/pexels-polina-tankilevitch-6419752.jpg";
const list = [
  { image: img1, title: "Burger" },
  { image: img2, title: "Menu" },
  { image: img3, title: "Soups" },
  { image: img4, title: "Drinks" },
  { image: img5, title: "Dips" },
  { image: img4, title: "Drinks" },
  { image: img5, title: "Dips" },
];

function Menu() {
  return (
    <SectionLayout className={styles.menuSection} title={"See our menu"}>
      <Slider list={list} />
    </SectionLayout>
  );
}

export default Menu;
