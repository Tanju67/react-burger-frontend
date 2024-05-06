/* eslint-disable react/prop-types */
import styles from "./AdminNewOrder.module.css";
import NewOrderItem from "./NewOrderItem";

function AdminNewOrder({ data }) {
  return (
    <div className={styles.page}>
      <ul>
        {data.map((item) => (
          <NewOrderItem key={item._id} item={item} />
        ))}
        {data.length === 0 && <h3>There is not any order yet!</h3>}
      </ul>
    </div>
  );
}

export default AdminNewOrder;
