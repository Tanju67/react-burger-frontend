/* eslint-disable react-refresh/only-export-components */
import { defer } from "react-router-dom";
import { loaderRequest } from "../shared/utils/loaderRequest";
import AdminNewOrderData from "../components/adminNewOrder/AdminNewOrderData";

function AdminTodayOrderPage() {
  return <AdminNewOrderData />;
}

export default AdminTodayOrderPage;

async function loadTodayOrder() {
  const token = localStorage.getItem("token");
  return loaderRequest(
    `http://localhost:5000/api/v1/order/admin/todayOrders`,
    true,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  );
}

export async function loader() {
  return defer({
    data: loadTodayOrder(),
  });
}
