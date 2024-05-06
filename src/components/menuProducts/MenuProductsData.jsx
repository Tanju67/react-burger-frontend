import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import MenuProducts from "./MenuProducts";
import Spinner from "../../shared/UIElements/Spinner";

function MenuProductsData() {
  const data = useLoaderData();
  return (
    <Suspense fallback={<Spinner box={true} />}>
      <Await resolve={data.products}>
        {(loadedData) => <MenuProducts data={loadedData} />}
      </Await>
    </Suspense>
  );
}

export default MenuProductsData;
