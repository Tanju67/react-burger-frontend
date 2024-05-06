/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import styles from "./Item.module.css";
import { useHttpRequest } from "../../shared/hooks/send-request";
import Spinner from "../../shared/UIElements/Spinner";

function Item({ item, viewIndex, setShowUpdateForm }) {
  const { sendRequest, isLoading } = useHttpRequest();
  const navigate = useNavigate();
  const deleteHandler = () => {
    const token = localStorage.getItem("token");
    sendRequest(
      `http://localhost:5000/api/v1/admin/${item._id}`,
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
    navigate(`?id=${item._id}&title=${item.title}`);
  };

  return (
    <li className={`${styles.item} ${viewIndex === 3 ? styles.view : ""}`}>
      {isLoading && <Spinner />}
      <div className={styles.contentBox}>
        <img src={item.image} alt={item.title} />
        <span>{item.title}</span>
      </div>
      <div className={styles.actionBox}>
        <span onClick={clickHandler}>
          <FaEdit />
        </span>
        <span onClick={deleteHandler}>
          <MdDeleteForever />
        </span>
      </div>
    </li>
  );
}

export default Item;
