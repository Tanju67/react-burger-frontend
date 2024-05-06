/* eslint-disable react-refresh/only-export-components */
import { defer } from "react-router-dom";
import { loaderRequest } from "../shared/utils/loaderRequest";
import MenuData from "../components/menu/MenuData";

function MenuPage() {
  return <MenuData />;
}

export default MenuPage;

async function loadMenu() {
  const token = localStorage.getItem("token");
  return loaderRequest(
    import.meta.env.VITE_BACKEND_URL + `/api/v1/admin`,
    true,
    {
      Authorization: `Bearer ${token}`,
    }
  );
}

export async function loader() {
  return defer({
    data: loadMenu(),
  });
}
