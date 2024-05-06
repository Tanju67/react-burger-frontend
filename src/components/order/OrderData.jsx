import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

import Order from "./Order";
import Spinner from "../../shared/UIElements/Spinner";

function OrderData() {
  const data = useLoaderData();
  return (
    <Suspense fallback={<Spinner box={true} />}>
      <Await resolve={data.data}>
        {(loadedData) => <Order data={loadedData} />}
      </Await>
    </Suspense>
  );
}

export default OrderData;
