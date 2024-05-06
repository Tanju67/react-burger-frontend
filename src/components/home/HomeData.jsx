import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Home from "./Home";
import Spinner from "../../shared/UIElements/Spinner";

function HomeData() {
  const data = useLoaderData();
  return (
    <Suspense fallback={<Spinner box={true} />}>
      <Await resolve={data.data}>
        {(loadedData) => <Home data={loadedData} />}
      </Await>
    </Suspense>
  );
}

export default HomeData;
