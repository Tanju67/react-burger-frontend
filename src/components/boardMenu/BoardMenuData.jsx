import { Suspense } from "react";
import { Await, useRouteLoaderData } from "react-router-dom";
import BoardMenu from "./BoardMenu";
import Spinner from "../../shared/UIElements/Spinner";

function BoardMenuData() {
  const data = useRouteLoaderData("menuloader");
  return (
    <Suspense fallback={<Spinner box={true} />}>
      <Await resolve={data.data}>
        {(loadedData) => <BoardMenu data={loadedData} />}
      </Await>
    </Suspense>
  );
}

export default BoardMenuData;
