/* eslint-disable react-refresh/only-export-components */
import { defer } from "react-router-dom";
import { loaderRequest } from "../shared/utils/loaderRequest";
import HomeData from "../components/home/HomeData";

function HomePage() {
  return <HomeData />;
}

export default HomePage;

async function loadMenu() {
  return loaderRequest(`http://localhost:5000/api/v1/admin`, true, {
    "Content-Type": "application/json",
  });
}

export async function loader() {
  return defer({
    data: loadMenu(),
  });
}
