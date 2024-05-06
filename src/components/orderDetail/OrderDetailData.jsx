import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import OrderDetail from "./OrderDetail";
import Spinner from "../../shared/UIElements/Spinner";

function OrderDetailData() {
  const data = useLoaderData();
  return (
    <Suspense fallback={<Spinner box={true} />}>
      <Await resolve={data.data}>
        {(loadedData) => <OrderDetail data={loadedData} />}
      </Await>
    </Suspense>
  );
}

export default OrderDetailData;
