import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import MyCurrentOrder from "./MyCurrentOrder";
import Spinner from "../../shared/UIElements/Spinner";

function MyCurrentOrderData() {
  const data = useLoaderData();
  return (
    <Suspense fallback={<Spinner box={true} />}>
      <Await resolve={data.data}>
        {(loadedData) => <MyCurrentOrder data={loadedData} />}
      </Await>
    </Suspense>
  );
}

export default MyCurrentOrderData;
