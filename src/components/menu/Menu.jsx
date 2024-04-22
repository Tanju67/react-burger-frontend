import React from "react";
import MenuList from "./MenuList";
import MenuLayout from "../../shared/UIElements/MenuLayout";

function Menu() {
  return (
    <MenuLayout title={"All Menus"}>
      <MenuList />
    </MenuLayout>
  );
}

export default Menu;
