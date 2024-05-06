/* eslint-disable react/prop-types */
import styles from "./Menu.module.css";
import SectionLayout from "../../shared/UIElements/SectionLayout";
import Slider from "../../shared/UIElements/slider/Slider";

function Menu({ data }) {
  return (
    <SectionLayout className={styles.menuSection} title={"See our menu"}>
      <Slider list={data} />
    </SectionLayout>
  );
}

export default Menu;
