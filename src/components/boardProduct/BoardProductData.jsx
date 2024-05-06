import { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import BoardProduct from "./BoardProduct";
import Spinner from "../../shared/UIElements/Spinner";

function BoardProductData() {
  const data = useRouteLoaderData("menuloader");
  return (
    <Suspense fallback={<Spinner box={true} />}>
      <Await resolve={data.data}>
        {(loadedData) => <BoardProduct data={loadedData} />}
      </Await>
    </Suspense>
  );
}

export default BoardProductData;
