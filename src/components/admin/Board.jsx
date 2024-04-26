import React from "react";
import styles from "./Board.module.css";
import { Outlet } from "react-router-dom";

function Board() {
  return (
    <div className={styles.board}>
      <Outlet />
    </div>
  );
}

export default Board;
