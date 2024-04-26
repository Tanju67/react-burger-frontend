import React from "react";
import styles from "./Dashboard.module.css";
import Sidebar from "./Sidebar";
import Board from "./Board";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <Board />
    </div>
  );
}

export default Dashboard;
