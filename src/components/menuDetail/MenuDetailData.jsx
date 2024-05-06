import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import MenuDetail from "./MenuDetail";
import Spinner from "../../shared/UIElements/Spinner";

function MenuDetailData() {
  const data = useLoaderData();
  return (
    <Suspense fallback={<Spinner box={true} />}>
      <Await resolve={data.products}>
        {(loadedData) => <MenuDetail data={loadedData} />}
      </Await>
    </Suspense>
  );
}

export default MenuDetailData;
