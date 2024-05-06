/* eslint-disable react/prop-types */
import styles from "./NewOrderItem.module.css";
import Button from "../../shared/UIElements/Button";

function NewOrderItem({ item }) {
  const address = item.street + " " + item.houseNumber;
  return (
    <li className={styles.item}>
      <span className={styles.name}>{item.name}</span>
      <span className={styles.address}>{address}</span>
      <span className={styles.phone}>Phone:{item.phone}</span>
      <Button size={"sm"} to={`/dashboard/orders/detail/${item._id}`}>
        Detail
      </Button>
    </li>
  );
}

export default NewOrderItem;
