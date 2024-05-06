/* eslint-disable react/prop-types */
import { useNavigate, useSearchParams } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import styles from "./Item.module.css";
import { useHttpRequest } from "../../shared/hooks/send-request";
import Spinner from "../../shared/UIElements/Spinner";

function Item({ item, viewIndex, setShowUpdateForm }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { sendRequest, isLoading } = useHttpRequest();
  const navigate = useNavigate();
  const deleteHandler = () => {
    const token = localStorage.getItem("token");
    sendRequest(
      `http://localhost:5000/api/v1/productAdmin/${item._id}`,
      "DELETE",
      undefined,
      undefined,
      {
        Authorization: `Bearer ${token}`,
      },
      (data) => {
        console.log(data);
        navigate(0);
      },
      true
    );
  };

  const clickHandler = () => {
    setShowUpdateForm(true);
    setSearchParams({ id: item._id, title: item.title });
  };
  return (
    <div
      className={`${styles.item} ${viewIndex === 1 ? styles.grid : ""} ${
        viewIndex === 2 ? styles.list : ""
      }`}
    >
      {isLoading && <Spinner />}
      <div className={styles.box}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>

      <div className={styles.box}>
        <span>${item.price.toFixed(2)}</span>
        {viewIndex === 1 && (
          <div className={styles.btnBox}>
            <em onClick={deleteHandler}>
              <MdDeleteForever />
              Delete
            </em>
            <em onClick={clickHandler}>
              <FaEdit />
              Update
            </em>
          </div>
        )}
        {viewIndex === 2 && (
          <div className={styles.btnBox}>
            <span>
              <FaEdit />
            </span>
            <span>
              <MdDeleteForever />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Item;
