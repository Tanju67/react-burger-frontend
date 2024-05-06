/* eslint-disable react/prop-types */
import { IoGrid } from "react-icons/io5";
import { FaImage, FaListUl } from "react-icons/fa6";
import styles from "./BoardMenuNav.module.css";
import Button from "../../shared/UIElements/Button";

function BoardMenuNav({
  showForm,
  showUpdateForm,
  setViewIndex,
  viewIndex,
  setShowForm,
  setShowUpdateForm,
}) {
  return (
    <div className={styles.nav}>
      <span>Menus</span>
      <div className={styles.options}>
        {!showForm && !showUpdateForm && (
          <>
            <span
              onClick={() => setViewIndex(1)}
              className={`${viewIndex === 1 ? styles.active : ""} ${
                styles.navGrid
              }`}
            >
              <IoGrid />
              Grid
            </span>
            <span
              onClick={() => setViewIndex(2)}
              className={`${viewIndex === 2 ? styles.active : ""}`}
            >
              <FaListUl />
              List
            </span>
            <span
              onClick={() => setViewIndex(3)}
              className={`${viewIndex === 3 ? styles.active : ""}`}
            >
              <FaImage />
              Image
            </span>
          </>
        )}
        {!showUpdateForm && (
          <Button
            onClick={() => setShowForm((prev) => !prev)}
            size={"sm"}
            rounded={true}
          >
            {showForm ? "< Back" : "+ Add Menu"}
          </Button>
        )}
        {showUpdateForm && (
          <Button
            to={"/dashboard/menus"}
            onClick={() => setShowUpdateForm(false)}
            size={"sm"}
            rounded={true}
          >
            {"<"} Back
          </Button>
        )}
      </div>
    </div>
  );
}

export default BoardMenuNav;
