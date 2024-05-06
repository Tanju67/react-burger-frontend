/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./BoardMenu.module.css";
import Item from "./Item";
import AddMenu from "./AddMenu";
import UpdateMenu from "./UpdateMenu";
import BoardMenuNav from "./BoardMenuNav";

function BoardMenu({ data }) {
  const [showForm, setShowForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [viewIndex, setViewIndex] = useState(2);

  return (
    <div className={styles.board}>
      <BoardMenuNav
        setShowForm={setShowForm}
        showForm={showForm}
        setShowUpdateForm={setShowUpdateForm}
        setViewIndex={setViewIndex}
        showUpdateForm={showUpdateForm}
        viewIndex={viewIndex}
      />
      {!showForm && !showUpdateForm && (
        <ul
          className={`${viewIndex === 1 ? styles.grid : ""} ${
            viewIndex === 2 ? styles.list : ""
          } ${viewIndex === 3 ? styles.imgView : ""}`}
        >
          {data.map((mi) => (
            <Item
              key={mi._id}
              item={mi}
              viewIndex={viewIndex}
              setShowForm={setShowForm}
              setShowUpdateForm={setShowUpdateForm}
            />
          ))}
        </ul>
      )}
      {showForm && <AddMenu />}
      {showUpdateForm && <UpdateMenu />}
    </div>
  );
}

export default BoardMenu;
