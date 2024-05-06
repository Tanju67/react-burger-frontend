import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Menu from "./Menu";
import Spinner from "../../shared/UIElements/Spinner";

function MenuData() {
  const data = useLoaderData();
  return (
    <Suspense fallback={<Spinner box={true} />}>
      <Await resolve={data.data}>
        {(loadedData) => <Menu data={loadedData} />}
      </Await>
    </Suspense>
  );
}

export default MenuData;
