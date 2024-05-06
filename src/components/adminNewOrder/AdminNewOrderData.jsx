import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import AdminNewOrder from "./AdminNewOrder";
import Spinner from "../../shared/UIElements/Spinner";

function AdminNewOrderData() {
  const data = useLoaderData();
  return (
    <Suspense fallback={<Spinner box={true} />}>
      <Await resolve={data.data}>
        {(loadedData) => <AdminNewOrder data={loadedData} />}
      </Await>
    </Suspense>
  );
}

export default AdminNewOrderData;
