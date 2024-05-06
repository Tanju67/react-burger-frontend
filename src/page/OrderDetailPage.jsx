/* eslint-disable react-refresh/only-export-components */
import { defer } from "react-router-dom";
import { loaderRequest } from "../shared/utils/loaderRequest";
import OrderDetailData from "../components/orderDetail/OrderDetailData";

function OrderDetailPage() {
  return <OrderDetailData />;
}

export default OrderDetailPage;

async function loadNewOrder(id) {
  const token = localStorage.getItem("token");
  return loaderRequest(
    `http://localhost:5000/api/v1/order/admin/detail/${id}`,
    true,
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  );
}

export async function loader({ params }) {
  const orderId = params.id;
  return defer({
    data: loadNewOrder(orderId),
  });
}
