import React from "react";
import styles from "./MenuDetail.module.css";
import img from "../../assets/pexels-enginakyurt-1552641.jpg";
import MenuLayout from "../../shared/UIElements/MenuLayout";
import Products from "./Products";

const menu = {
  title: "burger",
  image: img,
};

function MenuDetail() {
  return (
    <MenuLayout title={menu.title}>
      <Products menu={menu} />
    </MenuLayout>
  );
}

export default MenuDetail;
