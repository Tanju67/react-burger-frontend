/* eslint-disable react-refresh/only-export-components */
import { defer } from "react-router-dom";
import { loaderRequest } from "../shared/utils/loaderRequest";
import MenuDetailData from "../components/menuDetail/MenuDetailData";

function MenuDetailPage() {
  return <MenuDetailData />;
}

export default MenuDetailPage;

async function loadMenuPruducts(id) {
  return loaderRequest(
    `http://localhost:5000/api/v1/productAdmin/menu/${id}`,
    true,
    {
      "Content-Type": "application/json",
    }
  );
}

export async function loader({ params }) {
  const id = params.id;

  return defer({
    products: loadMenuPruducts(id),
  });
}
