/* eslint-disable react/prop-types */
import MenuLayout from "../../shared/UIElements/MenuLayout";
import OrderContent from "./OrderContent";
import { useSelector } from "react-redux";

function Order({ data }) {
  const role = useSelector((state) => state.auth.user.role);
  return (
    <MenuLayout title={data[0].title} orderBtn={role !== "admin"}>
      <OrderContent data={data} />
    </MenuLayout>
  );
}

export default Order;
