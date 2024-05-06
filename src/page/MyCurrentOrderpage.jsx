/* eslint-disable react-refresh/only-export-components */
import { defer } from "react-router-dom";
import { loaderRequest } from "../shared/utils/loaderRequest";
import MyCurrentOrderData from "../components/myCurrentOrder/MyCurrentOrderData";

function MyCurrentOrderpage() {
  return <MyCurrentOrderData />;
}

export default MyCurrentOrderpage;

async function loadCurrentOrder() {
  const token = localStorage.getItem("token");
  return loaderRequest(`http://localhost:5000/api/v1/order/current`, true, {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });
}

export async function loader() {
  return defer({
    data: loadCurrentOrder(),
  });
}
