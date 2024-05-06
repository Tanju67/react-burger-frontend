/* eslint-disable react-refresh/only-export-components */
import { defer } from "react-router-dom";
import Admin from "../components/admin/Admin";
import { loaderRequest } from "../shared/utils/loaderRequest";

function AdminPage() {
  return <Admin />;
}

export default AdminPage;

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
