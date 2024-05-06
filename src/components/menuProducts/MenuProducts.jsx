/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./MenuProducts.module.css";
import { IoArrowBackOutline, IoGrid } from "react-icons/io5";
import { Link, useSearchParams } from "react-router-dom";
import { FaListUl } from "react-icons/fa6";
import Button from "../../shared/UIElements/Button";
import Item from "./Item";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";

function MenuProducts({ data }) {
  const [searchParams] = useSearchParams();
  const [showForm, setShowForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [viewIndex, setViewIndex] = useState(1);
  return (
    <div className={styles.content}>
      <div className={styles.nav}>
        <div className={styles.left}>
          <Link to={".."}>
            <IoArrowBackOutline />
          </Link>
          <span>{searchParams.get("title")}</span>
        </div>
        <div className={styles.options}>
          {!showForm && !showUpdateForm && (
            <>
              <span
                onClick={() => setViewIndex(1)}
                className={`${viewIndex === 1 ? styles.active : ""} ${
                  styles.navList
                }`}
              >
                <IoGrid />
                Grid
              </span>
              <span
                onClick={() => setViewIndex(2)}
                className={`${viewIndex === 2 ? styles.active : ""} ${
                  styles.navList
                }`}
              >
                <FaListUl />
                List
              </span>
            </>
          )}
          {!showUpdateForm && (
            <Button
              onClick={() => setShowForm((prev) => !prev)}
              size={"sm"}
              rounded={true}
            >
              {showForm ? "< Back" : "+ Add Product"}
            </Button>
          )}
          {showUpdateForm && (
            <Button
              onClick={() => setShowUpdateForm(false)}
              size={"sm"}
              rounded={true}
            >
              {"<"} Back
            </Button>
          )}
        </div>
      </div>
      {!showForm && !showUpdateForm && data.length > 0 && (
        <ul
          className={`${viewIndex === 1 ? styles.grid : ""} ${
            viewIndex === 2 ? styles.list : ""
          }`}
        >
          {data.map((item) => (
            <Item
              key={item._id}
              item={item}
              viewIndex={viewIndex}
              setShowUpdateForm={setShowUpdateForm}
            />
          ))}
        </ul>
      )}

      {data.length === 0 && (
        <p className={styles.msg}>
          There is no product yet! Please add a product.
        </p>
      )}

      {showForm && <AddProduct />}
      {showUpdateForm && <UpdateProduct />}
    </div>
  );
}

export default MenuProducts;
