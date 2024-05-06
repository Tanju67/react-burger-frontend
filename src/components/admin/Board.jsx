import { Outlet } from "react-router-dom";
import styles from "./Board.module.css";

function Board() {
  return (
    <div className={styles.board}>
      <Outlet />
    </div>
  );
}

export default Board;
