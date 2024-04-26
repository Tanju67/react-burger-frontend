import React from "react";
import styles from "./Admin.module.css";
import MenuLayout from "../../shared/UIElements/MenuLayout";
import Dashboard from "./Dashboard";

function Admin() {
  return (
    <MenuLayout title={"Admin Dashboard"} sidebar={false}>
      <Dashboard />
    </MenuLayout>
  );
}

export default Admin;
