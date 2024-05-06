import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import AdminNewOrder from "../adminNewOrder/AdminNewOrder";

function AdminTodayOrderData() {
  const data = useLoaderData();
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Await resolve={data.data}>
        {(loadedData) => <AdminNewOrder data={loadedData} />}
      </Await>
    </Suspense>
  );
}

export default AdminTodayOrderData;
