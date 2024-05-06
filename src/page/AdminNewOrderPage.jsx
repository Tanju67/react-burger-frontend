/* eslint-disable react-refresh/only-export-components */
import { defer } from "react-router-dom";
import { loaderRequest } from "../shared/utils/loaderRequest";
import AdminNewOrderData from "../components/adminNewOrder/AdminNewOrderData";

function AdminNewOrderPage() {
  return <AdminNewOrderData />;
}

export default AdminNewOrderPage;

async function loadNewOrder() {
  const token = localStorage.getItem("token");
  return loaderRequest(
    import.meta.env.VITE_BACKEND_URL + `/api/v1/order/admin/activeOrders`,
    true,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  );
}

export async function loader() {
  return defer({
    data: loadNewOrder(),
  });
}
