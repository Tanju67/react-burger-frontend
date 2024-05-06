/* eslint-disable react-refresh/only-export-components */
import { defer } from "react-router-dom";
import MenuProductsData from "../components/menuProducts/MenuProductsData";
import { loaderRequest } from "../shared/utils/loaderRequest";

function MenuProductsPage() {
  return <MenuProductsData />;
}

export default MenuProductsPage;

async function loadMenuPruducts(id) {
  const token = localStorage.getItem("token");
  return loaderRequest(
    import.meta.env.VITE_BACKEND_URL + `/api/v1/productAdmin/menu/${id}`,
    true,
    {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }
  );
}

export async function loader({ params }) {
  const id = params.id;
  console.log(id);
  return defer({
    products: loadMenuPruducts(id),
  });
}
