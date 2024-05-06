import { useSelector } from "react-redux";
import MenuLayout from "../../shared/UIElements/MenuLayout";
import Dashboard from "./Dashboard";
import NotAuthorized from "../../shared/UIElements/NotAuthorized";

function Admin() {
  const role = useSelector((state) => state.auth.user.role);

  if (role !== "admin") {
    return <NotAuthorized />;
  }
  return (
    <MenuLayout title={"Admin Dashboard"} sidebar={false} cart={false}>
      <Dashboard />
    </MenuLayout>
  );
}

export default Admin;
