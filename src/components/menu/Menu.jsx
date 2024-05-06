/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import MenuList from "./MenuList";
import MenuLayout from "../../shared/UIElements/MenuLayout";

function Menu({ data }) {
  const role = useSelector((state) => state.auth.user.role);
  return (
    <MenuLayout title={"All Menus"} orderBtn={role !== "admin"}>
      <MenuList data={data} />
    </MenuLayout>
  );
}

export default Menu;
