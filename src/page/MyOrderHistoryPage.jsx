/* eslint-disable react-refresh/only-export-components */
import { defer } from "react-router-dom";
import { loaderRequest } from "../shared/utils/loaderRequest";
import MyOrderHistoryData from "../components/MyOrderHistory/MyOrderHistoryData";

function MyOrderHistoryPage() {
  return <MyOrderHistoryData />;
}

export default MyOrderHistoryPage;

async function loadHistoryOrder() {
  const token = localStorage.getItem("token");
  return loaderRequest(
    import.meta.env.VITE_BACKEND_URL + `/api/v1/order/history`,
    true,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  );
}

export async function loader() {
  return defer({
    data: loadHistoryOrder(),
  });
}
