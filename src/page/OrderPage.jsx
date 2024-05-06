/* eslint-disable react-refresh/only-export-components */
import { defer } from "react-router-dom";
import { loaderRequest } from "../shared/utils/loaderRequest";
import OrderData from "../components/order/OrderData";

function OrderPage() {
  return <OrderData />;
}

export default OrderPage;

async function loadSingleProduct(id) {
  return loaderRequest(
    import.meta.env.VITE_BACKEND_URL + `/api/v1/productAdmin/${id}`,
    true,
    {
      "Content-Type": "application/json",
    }
  );
}

export async function loader({ params }) {
  const id = params.id;
  return defer({
    data: loadSingleProduct(id),
  });
}
