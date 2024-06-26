/* eslint-disable react-refresh/only-export-components */
import { defer } from "react-router-dom";
import { loaderRequest } from "../shared/utils/loaderRequest";
import Home from "../components/home/Home";

function HomePage() {
  return <Home />;
}

export default HomePage;

async function loadMenu() {
  return loaderRequest(
    import.meta.env.VITE_BACKEND_URL + `/api/v1/admin`,
    true,
    {
      "Content-Type": "application/json",
    }
  );
}

export async function loader() {
  return defer({
    data: loadMenu(),
  });
}
